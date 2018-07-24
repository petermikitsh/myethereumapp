import { BadGateway, BadRequest } from '@feathersjs/errors';
import { get, isEmpty } from 'lodash';
import Web3 from 'web3';
import etherscanClient from '../../common/etherscanClient';

const web3 = new Web3();

export function getErrors({
  startblock,
  endblock,
  address,
}) {
  const errors = {};

  if (!web3.utils.isAddress(address)) {
    errors.address = 'Invalid ethereum address';
  }

  if (startblock && Number.isNaN(Number(startblock))) {
    errors.startblock = 'Enter a number';
  }

  if (endblock && Number.isNaN(Number(endblock))) {
    errors.endblock = 'Enter a number';
  }

  return errors;
}

function queryFromEtherscan() {
  return async (hook) => {
    const query = get(hook, 'params.query', {});

    if (!query.isForm) {
      return hook;
    }

    const errors = getErrors(query);

    if (!isEmpty(errors)) {
      return Promise.reject(new BadRequest({ errors }));
    }

    const {
      address,
      startblock,
      endblock,
      sort,
    } = query;

    const transactions = await etherscanClient.account.txlist(
      address,
      startblock,
      endblock,
      sort,
    ).catch(e => (
      Promise.reject(new BadGateway(e, { errors: { id: 'Unable to access Etherscan API' } }))
    ));

    // eslint-disable-next-line no-param-reassign
    hook.result = transactions.result;

    await Promise.all(transactions.result.map(async transaction => (
      hook.app.service('api/transactions').create({
        id: transaction.hash,
        ...transaction,
      }).catch(() => (
        hook.app.service('api/transactions').patch(
          transaction.hash,
          transaction,
        )
      ))
    )));

    return hook;
  };
}

export default {
  before: {
    find: queryFromEtherscan(),
  },
};

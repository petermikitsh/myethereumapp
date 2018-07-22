import { BadGateway } from '@feathersjs/errors';
import { get } from 'lodash';
import etherscanClient from '../../common/etherscanClient';

function queryFromEtherscan() {
  return async (hook) => {
    const {
      address,
      startblock,
      endblock,
      sort,
    } = get(hook, 'params.query', {});

    if (!address) {
      return hook;
    }

    const transactions = await etherscanClient.account.txlist(
      address,
      startblock,
      endblock,
      sort,
    ).catch(e => (
      Promise.reject(new BadGateway(e))
    ));

    // eslint-disable-next-line no-param-reassign
    hook.result = transactions.result;

    await Promise.all(transactions.result.map(async transaction => (
      hook.app.service('api/transactions').create({
        id: transaction.hash,
        ...transaction,
      }).catch(() => (
        hook.app.service('api/transactions').update(
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

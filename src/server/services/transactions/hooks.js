import { BadGateway } from '@feathersjs/errors';
import etherscanClient from '../../common/etherscanClient';

function queryFromEtherscan() {
  return async (hook) => {
    const {
      address,
      startblock,
      endblock,
      sort,
    } = hook.params.query;

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

    return hook;
  };
}

export default {
  before: {
    find: queryFromEtherscan(),
  },
};

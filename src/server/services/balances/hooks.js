import { iff, isProvider } from 'feathers-hooks-common';
import { BadGateway } from '@feathersjs/errors';
import etherscanClient from '../../common/etherscanClient';

function queryFromEtherscan() {
  return async (hook) => {
    const { app, id } = hook;

    await app.service('api/balances').get(id).catch(async () => {
      const balance = await etherscanClient.account.balance(id).catch(e => (
        Promise.reject(new BadGateway(e))
      ));

      const record = await app.service('api/balances').create({
        id,
        balance: balance.result,
      });

      // eslint-disable-next-line no-param-reassign
      hook.result = record;
    });
    return hook;
  };
}

export default {
  before: {
    get: iff(isProvider('external'), queryFromEtherscan()),
  },
};

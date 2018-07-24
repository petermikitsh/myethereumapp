import { iff, isProvider } from 'feathers-hooks-common';
import { BadRequest, BadGateway } from '@feathersjs/errors';
import Web3 from 'web3';
import etherscanClient from '../../common/etherscanClient';

const web3 = new Web3();

function queryFromEtherscan() {
  return async (hook) => {
    const { app, id } = hook;

    if (!web3.utils.isAddress(id)) {
      return Promise.reject(new BadRequest({
        errors: {
          id: 'Invalid Ethereum address',
        },
      }));
    }

    const balance = await etherscanClient.account.balance(id).catch(e => (
      Promise.reject(new BadGateway(e, { errors: { id: 'Unable to access Etherscan API' } }))
    ));

    const record = await app.service('api/balances').create({
      id,
      balance: balance.result,
    }).catch(async () => (
      app.service('api/balances').patch(
        id,
        {
          balance: balance.result,
        },
      )
    ));

    // eslint-disable-next-line no-param-reassign
    hook.result = record;

    return hook;
  };
}

export default {
  before: {
    get: iff(isProvider('external'), queryFromEtherscan()),
  },
};

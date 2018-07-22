import feathers from '@feathersjs/feathers';
import { BadGateway } from '@feathersjs/errors';
import service from '../index';
import { external } from '../../../__tests__/helpers';

describe('src/server/services/transactions', async () => {
  let app;
  let externalApp;

  beforeAll(async () => {
    app = feathers();
    app.configure(service);
    externalApp = external(app);
  });

  afterAll(async () => (
    app.service('api/transactions').remove(null)
  ));

  test('transactions should throw an error for an invalid address', async () => {
    const query = {
      query: {
        address: 'an_invalid_address',
      },
    };
    await expect(externalApp
      .service('api/transactions')
      .find(query))
      .rejects
      .toThrow(BadGateway);
  });

  test('transactions should return the list of transactions for the address', async () => {
    const query = {
      query: {
        address: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
      },
    };
    const result = await externalApp.service('api/transactions').find(query);
    expect(result).toHaveLength(29);

    expect(result[0].hash).toBe('GENESIS_ddbd2b932c763ba5b1b7ae3b362eac3e8d40121a');
  });

  test('transactions should return within specified blocks, sorted descending', async () => {
    const query = {
      query: {
        address: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
        startblock: 47884 - 1,
        endblock: 47894 + 1,
        sort: 'desc',
      },
    };
    const result = await externalApp.service('api/transactions').find(query);
    expect(result).toHaveLength(2);
    expect(result[0].blockNumber).toBe('47894');
  });

  test('should return all transactions from DB when no query is provided', async () => {
    const result = await externalApp.service('api/transactions').find();
    expect(result).toHaveLength(29);
  });
});

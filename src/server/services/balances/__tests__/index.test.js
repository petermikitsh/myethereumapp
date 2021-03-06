import feathers from '@feathersjs/feathers';
import { BadRequest } from '@feathersjs/errors';
import service from '../index';
import { external } from '../../../__tests__/helpers';

describe('src/server/services/balances', async () => {
  let app;
  let externalApp;

  beforeAll(async () => {
    app = feathers();
    app.configure(service);
    externalApp = external(app);
  });

  afterAll(async () => (
    app.service('api/balances').remove(null)
  ));

  test('balances should throw an error for an invalid address', async () => {
    await expect(externalApp
      .service('api/balances')
      .get('__bad_address__'))
      .rejects
      .toThrow(BadRequest);
  });

  test('balances should get the balance for the address', async () => {
    const result = await externalApp
      .service('api/balances')
      .get('0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a');

    expect(result.balance)
      .toEqual('40807168566070000000000');
  });

  test('balances should update if already existing in db', async () => {
    const result = await externalApp
      .service('api/balances')
      .get('0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a');

    const secondResult = await externalApp
      .service('api/balances')
      .get('0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a');

    expect(result.updatedAt === secondResult.updatedAt).toBeFalsy();
  });
});

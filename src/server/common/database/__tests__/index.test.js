import { onConnectionFail } from '../index';

describe('src/server/common/database/index', () => {
  test('it should throw an error on connection failure', () => {
    expect(onConnectionFail()).rejects.toThrow(Error);
  });
});

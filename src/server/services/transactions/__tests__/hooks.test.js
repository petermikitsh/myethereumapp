import { getErrors } from '../hooks';

describe('src/server/services/transactions/hooks', () => {
  test('should return empty object with valid params', () => {
    const result = getErrors({
      address: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
      startblock: '47883',
      endblock: '47894',
    });
    expect(result).toEqual({});
  });

  test('should error if address is empty', () => {
    const result = getErrors({});
    expect(result).toEqual({ address: 'Enter an address' });
  });

  test('should error if startblock is not a number', () => {
    const result = getErrors({
      address: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
      startblock: 'notANumber',
    });
    expect(result).toEqual({ startblock: 'Enter a number' });
  });

  test('should error if endblock is not a number', () => {
    const result = getErrors({
      address: '0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a',
      endblock: 'notANumber',
    });
    expect(result).toEqual({ endblock: 'Enter a number' });
  });
});

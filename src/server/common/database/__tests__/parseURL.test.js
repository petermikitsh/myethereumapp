import parseURL from '../parseURL';

describe('common/database/parseURL', () => {
  test('should parse a db url string that contains a port', () => {
    const actual = parseURL('http://www.foo.com:4010/bar?baz=bam');
    expect(actual.port).toBe('4010');
    expect(actual.database).toBe('bar');
  });

  test('should parse a db url string with auth credentials', () => {
    const actual = parseURL('http://user:secret@www.foo.com:4010/bar?baz=bam');
    expect(actual.username).toBe('user');
    expect(actual.password).toBe('secret');
  });

  test('should not return a port when no port is present', () => {
    const actual = parseURL('http://www.foo.com/bar?baz=bam');
    expect(actual.port).toBe(undefined);
  });
});

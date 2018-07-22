jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

const index = require('../index');

describe('src/client/index', () => {
  test('it should initialize the application', () => {
    expect(index).not.toThrow();
  });
});

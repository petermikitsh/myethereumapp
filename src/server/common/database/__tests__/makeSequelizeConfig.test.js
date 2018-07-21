import makeSequelizeConfig from '../makeSequelizeConfig';

describe('src/server/common/database/makeSequelizeConfig', () => {
  test('it should generate a config', () => {
    const config = {
      DATABASE_URL: 'mysql://user:pass@0.0.0.0:3306/etherscan-local',
    };

    expect(makeSequelizeConfig(config)).toBeTruthy();
  });

  test('it should generate a config for Google Cloud Platform', () => {
    const DB_SERVER_CA = 'somestring';

    const config = {
      DATABASE_URL: 'mysql://user:pass@0.0.0.0:3306/etherscan-local',
      DB_SERVER_CA,
    };

    const result = makeSequelizeConfig(config);
    expect(result.dialectOptions.ssl.ca).toEqual(DB_SERVER_CA);
  });
});

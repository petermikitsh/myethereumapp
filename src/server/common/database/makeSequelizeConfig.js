import url from 'url';

export default function makeSequelizeConfig(constants) {
  const baseConfig = {
    // dialect: one of 'mysql', 'sqlite', 'postgres', 'mariadb'
    dialect: url.parse(constants.DATABASE_URL).protocol.replace(/:/g, ''),
    dialectOptions: {
      collate: 'utf8mb4_unicode_ci',
      connectTimeout: 10 * 1000,
    },
    query: {
      raw: true,
    },
    logging: false,
  };
  /* In production (GCP SQL), connections are through SSL only!
   * These additional properties are necessary to connect.
   */
  if (constants.DB_SERVER_CA) {
    return {
      ...baseConfig,
      dialectOptions: {
        collate: 'utf8mb4_unicode_ci',
        connectTimeout: 10 * 1000,
        ssl: {
          ca: constants.DB_SERVER_CA,
          key: constants.DB_CLIENT_KEY,
          cert: constants.DB_CLIENT_CERT,
        },
      },
    };
  }
  return baseConfig;
}

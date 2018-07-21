const constants = require('../constants');

const opts = {
  url: constants.DATABASE_URL,
  dialect: 'mysql',
  migrationStorageTableName: '_migrations',
};

const prodOpts = {
  url: constants.DATABASE_URL,
  dialect: 'mysql',
  migrationStorageTableName: '_migrations',
  dialectOptions: {
    collate: 'utf8mb4_unicode_ci',
    ssl: {
      ca: constants.DB_SERVER_CA,
      key: constants.DB_CLIENT_KEY,
      cert: constants.DB_CLIENT_CERT,
    },
  },
};

module.exports = {
  development: opts,
  test: opts,
  production: prodOpts,
};

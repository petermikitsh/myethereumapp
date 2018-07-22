const env = process.env.NODE_ENV;

function base64ToPlaintext(input) {
  return Buffer.from(input || '', 'base64').toString();
}

function getConfig() {
  return {
    DATABASE_URL: (
      base64ToPlaintext(process.env.ETHERSCAN_DB_URL)
      || env === 'test'
        ? 'mysql://localhost:3306/etherscan-test'
        : 'mysql://localhost:3306/etherscan-local'
    ),
    DB_SERVER_CA: base64ToPlaintext(process.env.DB_SERVER_CA),
    DB_CLIENT_KEY: base64ToPlaintext(process.env.DB_CLIENT_KEY),
    DB_CLIENT_CERT: base64ToPlaintext(process.env.DB_CLIENT_CERT),
    ENV: env,
    ETHERSCAN_API_KEY: base64ToPlaintext(process.env.ETHERSCAN_API_KEY),
    PORT: Number(process.env.ETHERSCAN_PORT) || env === 'test' ? 3001 : 3000,
  };
}

module.exports = getConfig();

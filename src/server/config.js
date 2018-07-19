const env = process.env.NODE_ENV;

function getConfig() {
  return {
    PORT: Number(process.env.ETHERSCAN_PORT) || env === 'test' ? 3001 : 3000,
  };
}

export default getConfig();

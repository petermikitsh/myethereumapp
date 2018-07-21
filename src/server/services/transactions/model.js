import Sequelize from 'sequelize';
import connection from '../../common/database';

export default connection.define('transactions', {
  id: {
    type: Sequelize.STRING(191),
    primaryKey: true,
  },
  blockNumber: Sequelize.STRING,
  blockHash: Sequelize.STRING,
  timeStamp: Sequelize.STRING,
  nonce: Sequelize.STRING,
  transactionIndex: Sequelize.STRING,
  from: Sequelize.STRING,
  to: Sequelize.STRING,
  value: Sequelize.STRING,
  gas: Sequelize.STRING,
  gasPrice: Sequelize.STRING,
  input: Sequelize.STRING,
  contractAddress: Sequelize.STRING,
  cumulativeGasUsed: Sequelize.STRING,
  txreceipt_status: Sequelize.STRING,
  gasUsed: Sequelize.STRING,
  confirmations: Sequelize.STRING,
  isError: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

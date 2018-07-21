import Sequelize from 'sequelize';
import connection from '../../common/database';

export default connection.define('balances', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  balance: Sequelize.STRING,
});

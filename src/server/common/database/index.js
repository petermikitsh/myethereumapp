import Sequelize from 'sequelize';
import constants from '../../constants';
import makeSequelizeConfig from './makeSequelizeConfig';

const connection = new Sequelize(constants.DATABASE_URL, makeSequelizeConfig(constants));

export function onConnectionFail(err) {
  return Promise.reject(new Error(`Could not connect to database: ${err}`));
}

connection
  .authenticate()
  .catch(onConnectionFail);

export default connection;

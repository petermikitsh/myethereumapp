import service from 'feathers-sequelize';
import hooks from './hooks';
import model from './model';

export default function () {
  this.use('api/balances', service({ Model: model }));
  this.service('api/balances').hooks(hooks);
}

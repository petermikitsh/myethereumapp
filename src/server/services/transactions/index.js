import service from 'feathers-sequelize';
import hooks from './hooks';
import model from './model';

export default function () {
  this.use('api/transactions', service({ Model: model }));
  this.service('api/transactions').hooks(hooks);
}

import balances from './balances';
import render from './render';
import transactions from './transactions';

const services = [
  balances,
  transactions,
  /* render service is catch-all and must be the last registered middleware. */
  render,
];

function iterator(service) {
  service.call(this);
}

export default function registerServices() {
  services.forEach(iterator.bind(this));
}

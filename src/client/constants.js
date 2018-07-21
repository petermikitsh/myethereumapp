import feathers from '@feathersjs/feathers';
import io from 'socket.io-client';
import reduxifyServices from 'feathers-redux';
import socketio from '@feathersjs/socketio-client';

const socket = io(window.location.origin);
const client = feathers().configure(socketio(socket));

export const SERVICES = [
  'api/balances',
  'api/transactions',
];

export const API_CLIENT = reduxifyServices(client, SERVICES);

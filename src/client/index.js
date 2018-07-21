/* eslint-env browser */

const React = require('react');
const { render } = require('react-dom');
const App = require('./app').default;
const configureStore = require('./store').default;

const store = configureStore({});
const AppNode = document.getElementById('app');

/* eslint-disable-next-line object-shorthand */
const ReactRoot = React.createElement(App, { store: store });

render(ReactRoot, AppNode);

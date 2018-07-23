import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Balances from './routes/Balances';
import AppBar from './components/AppBar';
import Tabs from './components/Tabs';
import Transactions from './routes/Transactions';
import TransactionsByAddress from './routes/TransactionsByAddress';

const Placeholder = ({ children }) => children;

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Placeholder>
        <AppBar />
        <Route component={Tabs} />
        <Route exact path="/" component={Balances} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/transactions/:id" component={TransactionsByAddress} />
      </Placeholder>
    </BrowserRouter>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default hot(module)(App);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Root from './routes/Root';
import AppBar from './components/AppBar';

const App = ({ store }) => (
  [
    <AppBar key="0" />,
    <Provider key="1" store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Root} />
        </Switch>
      </BrowserRouter>
    </Provider>,
  ]
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default hot(module)(App);

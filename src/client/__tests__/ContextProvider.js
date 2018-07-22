import React from 'react';
import PropTypes from 'prop-types';
import { MemoryRouter } from 'react-router';
import configureStore from '../store';

class ContextProvider extends React.Component {
  static childContextTypes = {
    router: PropTypes.object,
    store: PropTypes.object,
  }

  getChildContext = () => ({
    store: configureStore(),
  })

  render() {
    const { children } = this.props;
    return (
      <MemoryRouter>
        {children}
      </MemoryRouter>
    );
  }
}

ContextProvider.defaultProps = {
  children: null,
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;

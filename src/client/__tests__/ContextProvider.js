import React from 'react';
import PropTypes from 'prop-types';
import configureStore from '../store';

class ContextProvider extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext = () => ({
    store: configureStore(),
  })

  render() {
    const { children } = this.props;
    return children;
  }
}

ContextProvider.defaultProps = {
  children: null,
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ContextProvider;

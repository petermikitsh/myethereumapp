import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import Balances from '../components/Balances';
import { API_CLIENT } from '../constants';

const params = {
  query: {
    $sort: {
      updatedAt: -1,
    },
  },
};

export class BalancesRoute extends React.Component {
  componentDidMount() {
    const { find } = this.props;
    find(params);
  }

  onSubmit = ({ id }) => {
    const { find, get } = this.props;
    return get(id).then(() => find(params));
  }

  render() {
    const { balances } = this.props;
    return (
      <Balances
        balances={balances}
        onSubmit={this.onSubmit}
      />
    );
  }
}

BalancesRoute.propTypes = {
  balances: PropTypes.array.isRequired,
  find: PropTypes.func.isRequired,
  get: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    balances: state['api/balances'].queryResult || [],
  };
}

function mapActionsToProps() {
  return {
    find: API_CLIENT['api/balances'].find,
    get: API_CLIENT['api/balances'].get,
  };
}

export default connect(mapStateToProps, mapActionsToProps())(BalancesRoute);

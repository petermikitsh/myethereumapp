import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Transactions from '../components/Transactions';
import { API_CLIENT } from '../constants';

class TransactionsRoute extends React.Component {
  componentDidMount() {
    const { find } = this.props;
    find({
      query: {
        $sort: {
          blockNumber: 1,
        },
      },
    });
  }

  onSubmit = (query) => {
    const { find } = this.props;
    return find({ query });
  }

  render() {
    const { transactions } = this.props;
    return (
      <Transactions
        onSubmit={this.onSubmit}
        transactions={transactions}
      />
    );
  }
}

TransactionsRoute.propTypes = {
  transactions: PropTypes.array.isRequired,
  find: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    transactions: state['api/transactions'].queryResult || [],
  };
}

function mapActionsToProps() {
  return {
    find: API_CLIENT['api/transactions'].find,
  };
}

export default connect(mapStateToProps, mapActionsToProps())(TransactionsRoute);

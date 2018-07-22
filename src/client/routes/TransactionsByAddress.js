import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Transactions from '../components/Transactions';
import { API_CLIENT } from '../constants';

class TransactionsByAddress extends React.Component {
  componentDidMount() {
    const { find, match: { params: { id } } } = this.props;
    find({
      query: {
        $or: [
          { from: id },
          { to: id },
        ],
        $sort: {
          blockNumber: 1,
        },
      },
    });
  }

  render() {
    const { transactions, match: { params: { id } } } = this.props;
    return (
      <Transactions
        address={id}
        transactions={transactions}
      />
    );
  }
}

TransactionsByAddress.propTypes = {
  transactions: PropTypes.array.isRequired,
  find: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapActionsToProps())(TransactionsByAddress);

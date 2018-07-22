import React from 'react';
import List from 'material-react-components/es/List';
import PropTypes from 'prop-types';
import Form from './Form';
import BalanceListItem from './BalanceListItem';
import Page from '../Page';

export default function Balances(props) {
  const { onSubmit, balances } = props;
  return (
    <Page title="Ethereum Wallets">
      <Form onSubmit={onSubmit} />
      <List style={{ backgroundColor: 'transparent', color: '#30cd9a' }}>
        {balances.map(balance => <BalanceListItem key={balance.id} {...balance} />)}
      </List>
    </Page>
  );
}

Balances.defaultProps = {
  balances: [],
};

Balances.propTypes = {
  balances: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

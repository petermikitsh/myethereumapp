import React from 'react';
import Typography from 'material-react-components/es/Typography';
import List from 'material-react-components/es/List';
import PropTypes from 'prop-types';
import Form from './Form';
import BalanceListItem from './BalanceListItem';

export default function Balances(props) {
  const { onSubmit, balances } = props;
  return (
    <div style={{ margin: '20px' }}>
      <Typography type="display1" style={{ color: '#FFF' }}>
        Ethereum Wallets
      </Typography>
      <Form onSubmit={onSubmit} />
      <List style={{ backgroundColor: 'transparent', color: '#30cd9a' }}>
        {balances.map(balance => <BalanceListItem key={balance.id} {...balance} />)}
      </List>
    </div>
  );
}

Balances.defaultProps = {
  balances: [],
};

Balances.propTypes = {
  balances: PropTypes.array,
  onSubmit: PropTypes.func.isRequired,
};

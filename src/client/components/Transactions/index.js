import List, { ListItem } from 'material-react-components/es/List';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import React from 'react';
import Page from '../Page';

export default function Transactions({ transactions, address }) {
  let title = 'Transactions';

  if (address) {
    title += ` for ${address}`;
  }

  return (
    <Page title={title}>
      <List style={{ backgroundColor: 'transparent' }}>
        {transactions.map(({
          id,
          blockNumber,
          from,
          to,
          value,
        }) => (
          <ListItem
            key={id}
            primary={(
              <div
                style={{
                  color: '#30cd9a',
                  textOverflow: 'ellipsis',
                  overflowY: 'hidden',
                }}
              >
                {id}
              </div>
            )}
            secondary={(
              <div style={{ color: '#FFF' }}>
                <div>
                  {`Block #: ${blockNumber}`}
                </div>
                <div>
                  {`From: ${from}`}
                </div>
                <div>
                  {`To: ${to}`}
                </div>
                <div>
                  {`Amount: ${numeral(value).divide(10 ** 18).format('0,0.00000')} ETH}`}
                </div>
              </div>
            )}
          />
        ))}
      </List>
    </Page>
  );
}

Transactions.defaultProps = {
  address: null,
};

Transactions.propTypes = {
  address: PropTypes.string,
  transactions: PropTypes.array.isRequired,
};

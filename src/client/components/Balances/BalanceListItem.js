import React from 'react';
import { distanceInWordsStrict } from 'date-fns';
import SvgIcon from 'material-react-components/es/SvgIcon';
import ArrowForward from 'material-design-icons/navigation/svg/production/ic_arrow_forward_24px.svg';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import { ListItem } from 'material-react-components/es/List';

class BalanceListItem extends React.Component {
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      time: new Date().toLocaleString(),
    });
  }

  render() {
    const { updatedAt, id, balance } = this.props;
    return (
      <ListItem
        primary={(
          <div style={{ color: '#30cd9a' }}>
            {id}
          </div>
        )}
        buttonProps={{
          style: {
            justifyContent: 'flex-start',
          },
        }}
        secondary={([
          <span key="0" style={{ color: '#fff' }}>
            {`${numeral(balance).divide(10 ** 18).format('0,0.0000')} ETH`}
          </span>,
          <span key="1" style={{ color: '#fff' }}>
            {` · ${distanceInWordsStrict(updatedAt, new Date())}`}
          </span>,
        ])}
        action={(
          <SvgIcon
            style={{ fill: '#fff' }}
            component={ArrowForward}
          />
        )}
      />
    );
  }
}

BalanceListItem.propTypes = {
  id: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

export default BalanceListItem;

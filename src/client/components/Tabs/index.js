import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import MRCTabs, { Tab as MRCTab } from 'material-react-components/es/Tabs';

function getIndex(pathname) {
  if (pathname.indexOf('transactions') > 0) {
    return 1;
  }
  return 0;
}

function Tabs({ location: { pathname } }) {
  return (
    <MRCTabs barColor="" indicatorColor="#21ce99" index={getIndex(pathname)}>
      <MRCTab component={NavLink} to="/" label="Wallets" />
      <MRCTab component={NavLink} to="/transactions" label="Transactions" />
    </MRCTabs>
  );
}

Tabs.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Tabs;

import React from 'react';
import MRCTabs, { Tab as MRCTab } from 'material-react-components/es/Tabs';

function Tabs() {
  return (
    <MRCTabs barColor="" indicatorColor="#21ce99">
      <MRCTab label="Wallets" />
      <MRCTab label="Transactions" />
    </MRCTabs>
  );
}

export default Tabs;

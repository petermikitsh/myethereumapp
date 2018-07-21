import React from 'react';
import MRCAppBar from 'material-react-components/es/AppBar';
import Styles from './AppBar.css';

function AppBar() {
  return (
    <MRCAppBar
      backgroundColor="#000"
      elevation={0}
    >
      <div className={Styles.title}>
        MyEthereum.app
      </div>
    </MRCAppBar>
  );
}

export default AppBar;

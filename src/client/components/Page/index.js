import React from 'react';
import Typography from 'material-react-components/es/Typography';
import PropTypes from 'prop-types';
import Styles from './Page.css';

export default function PageLayout({ title, children }) {
  return (
    <div className={Styles.page}>
      <Typography type="headline" className={Styles.title}>
        {title}
      </Typography>
      { children }
    </div>
  );
}

PageLayout.defaultProps = {
  title: null,
  children: null,
};

PageLayout.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};

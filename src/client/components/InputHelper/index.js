import PropTypes from 'prop-types';
import React from 'react';
import Warning from 'material-design-icons/alert/svg/production/ic_error_outline_24px.svg';
import Styles from './InputHelper.css';

/**
 * Establishes a common pattern for TextField helpers.
 *
 * If there is an error, show the error text and an icon
 * (a11y rule for low color/vision users) in the error color.
 *
 * If there is no error, only show the helper message.
 */
function InputHelper({ error, message }) {
  return (
    <span className={Styles.root}>
      {error && (
        <Warning
          focusable="false"
          className={Styles.icon}
          style={{ fill: error && '#F00' }}
        />
      )}
      {message}
    </span>
  );
}

InputHelper.defaultProps = {
  error: null,
  message: null,
};

InputHelper.propTypes = {
  error: PropTypes.node,
  message: PropTypes.node,
};

export default InputHelper;

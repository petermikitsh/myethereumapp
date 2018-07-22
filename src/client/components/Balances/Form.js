import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from 'material-react-components/es/TextField';
import InputHelper from '../InputHelper';

const StandardHelper = (
  <div style={{ color: '#FFF' }}>
    Enter an address
  </div>
);

const ErrorHelper = (
  <div style={{ color: '#F00' }}>
    There was a problem with that address
  </div>
);

class BalanceForm extends React.Component {
  address = ({ input, meta: { error } }) => (
    <TextField
      label="Address"
      primaryColor="#30cd9a"
      errorColor={error ? '#F00' : 'rgba(255,255,255,0.5)'}
      helperText={(
        <InputHelper
          error={error}
          message={error ? ErrorHelper : StandardHelper}
        />
      )}
      style={{ color: '#fff' }}
      value={input.value}
      onChange={input.onChange}
    />
  )

  submit = (data) => {
    const { onSubmit, reset } = this.props;
    return onSubmit(data)
      .then(reset)
      .catch(({ errors }) => {
        throw new SubmissionError(errors);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name="id"
          component={this.address}
        />
      </form>
    );
  }
}

BalanceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'BalanceForm',
})(BalanceForm);

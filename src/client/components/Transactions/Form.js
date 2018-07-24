import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';
import SelectField from 'material-react-components/es/SelectField';
import TextField from 'material-react-components/es/TextField';
import Button from 'material-react-components/es/Button';
import Styles from './Form.css';
import InputHelper from '../InputHelper';

class TransactionsForm extends React.Component {
  address = ({ input, meta: { error } }) => (
    <TextField
      label="Address"
      primaryColor="#30cd9a"
      errorColor={error ? '#F00' : 'rgba(255,255,255,0.5)'}
      style={{ color: '#fff' }}
      value={input.value}
      onChange={input.onChange}
      helperText={<InputHelper error={error} message={error} />}
    />
  )

  startblock = ({ input, meta: { error } }) => (
    <TextField
      label="Start Block"
      primaryColor="#30cd9a"
      errorColor={error ? '#F00' : 'rgba(255,255,255,0.5)'}
      style={{ color: '#fff' }}
      value={input.value}
      onChange={input.onChange}
      helperText={<InputHelper error={error} message={error} />}
    />
  )

  endblock = ({ input, meta: { error } }) => (
    <TextField
      label="End Block"
      primaryColor="#30cd9a"
      errorColor={error ? '#F00' : 'rgba(255,255,255,0.5)'}
      style={{ color: '#fff' }}
      value={input.value}
      onChange={input.onChange}
      helperText={<InputHelper error={error} message={error} />}
    />
  )

  sort = ({ input }) => (
    <div style={{ fill: 'rgba(255,255,255,0.5)' }}>
      <SelectField
        label={input.value ? 'Sort' : ''}
        errorColor="rgba(255,255,255,0.5)"
        value={input.value}
        onChange={input.onChange}
        style={{ color: input.value ? '#fff' : 'rgba(255,255,255,0.5)' }}
      >
        <option disabled value="" defaultValue>
          Sort
        </option>
        <option value="desc">
          Descending
        </option>
        <option value="asc">
          Ascending
        </option>
      </SelectField>
    </div>
  )

  submit = (data) => {
    const { onSubmit } = this.props;
    return onSubmit(data)
      .catch(({ errors }) => {
        throw new SubmissionError(errors);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name="address"
          component={this.address}
        />
        <div className={Styles.row}>
          <div className={Styles.rowField}>
            <Field
              name="startblock"
              component={this.startblock}
            />
          </div>
          <div className={Styles.rowField}>
            <Field
              name="endblock"
              component={this.endblock}
            />
          </div>
          <div className={Styles.rowField}>
            <Field
              name="sort"
              component={this.sort}
            />
          </div>
        </div>
        <div className={Styles.center}>
          <Button
            buttonColor="#30cd9a"
            type="submit"
          >
            Search Transactions
          </Button>
        </div>
      </form>
    );
  }
}

TransactionsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'TransactionsForm',
  initialValues: {
    isForm: true,
  },
})(TransactionsForm);

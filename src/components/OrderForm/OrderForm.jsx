import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';

import OrderInput from '../OrderInput';
import OrderAdress from '../OrderAdress';
import OrderButton from '../OrderButton';

const displayName = 'OrderForm';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const validate = values => {
  const errors = {};
  if (!values.get('name')) errors.name = 'Required';
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('city')) errors.city = 'Required';
  if (!values.get('zip')) {
    errors.zip = 'Required';
  } else if (!/^[0-9]{5}(?:-[0-9]{4})?$/i.test(values.get('zip'))) {
    errors.zip = 'Invalid postal code';
  }
  return errors;
};

const OrderForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={OrderInput} label="Name:" />
      <Field name="email" type="email" component={OrderInput} label="Email:" />
      <OrderAdress />
      <OrderButton type="submit">Submit</OrderButton>
    </form>
  );
};

export default reduxForm({
  form: 'order',
  validate
})(OrderForm);

OrderForm.displayName = displayName;
OrderForm.propTypes = propTypes;

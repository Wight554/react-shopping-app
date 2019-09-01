import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form/immutable';

import OrderInput from '../OrderInput';
import OrderAdress from '../OrderAdress';
import OrderButton from '../OrderButton';

const displayName = 'OrderForm';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
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

export default OrderForm;

OrderForm.displayName = displayName;
OrderForm.propTypes = propTypes;

import React from 'react';
import { Field } from 'redux-form/immutable';
import OrderInput from '../OrderInput';

const displayName = 'OrderAdress';

export default function OrderAdress() {
  return (
    <div>
      <div>Delivery Address:</div>
      <Field name="city" type="text" component={OrderInput} label="City:" />
      <Field name="zip" type="number" component={OrderInput} label="Postal Code:" />
    </div>
  );
}

OrderAdress.displayName = displayName;

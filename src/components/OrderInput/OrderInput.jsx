import React from 'react';
import PropTypes from 'prop-types';
import OrderText from '../OrderText';

const displayName = 'OrderInput';

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.boolean,
    error: PropTypes.boolean
  }).isRequired
};

export default function OrderInput({ label, type, input, meta: { touched, error } }) {
  return (
    <div>
      <label htmlFor={input.name}>
        <OrderText>{label}</OrderText>
      </label>
      <div>
        <input {...input} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

OrderInput.displayName = displayName;
OrderInput.propTypes = propTypes;

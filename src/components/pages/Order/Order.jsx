import React from 'react';
import PropTypes from 'prop-types';
import OrderStyle from './OrderStyle';
import OrderForm from '../../OrderForm';
import MasterPage from '../MasterPage';

const displayName = 'Order';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default function Order({ handleSubmit }) {
  return (
    <MasterPage pageTitle="Order">
      <OrderStyle>
        <OrderForm onSubmit={handleSubmit} />
      </OrderStyle>
    </MasterPage>
  );
}

Order.displayName = displayName;
Order.propTypes = propTypes;

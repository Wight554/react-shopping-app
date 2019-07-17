import React from 'react';
import OrderStyle from './OrderStyle';
import MasterPage from '../MasterPage';

const displayName = 'Order';

const propTypes = {};

export default function Order() {
  return (
    <MasterPage pageTitle="Order">
      <OrderStyle />
    </MasterPage>
  );
}

Order.displayName = displayName;
Order.propTypes = propTypes;

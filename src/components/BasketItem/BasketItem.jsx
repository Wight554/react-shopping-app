import React from 'react';
import PropTypes from 'prop-types';
import BasketItemStyle from './BasketItemStyle';
import BasketCount from '../BasketCount';
import BasketTotal from '../BasketTotal';
import ItemProduct from '../ItemProduct';
import ItemLogo from '../ItemLogo';

const displayName = 'BasketItem';

const propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleChangeCount: PropTypes.func.isRequired
};

export default function BasketItem({ name, count, price, handleChangeCount }) {
  return (
    <BasketItemStyle>
      <div>
        <ItemLogo />
        <ItemProduct>{name}</ItemProduct>
      </div>
      <div>
        <BasketCount value={count} onChange={handleChangeCount} />
        <BasketTotal>{`Total Price: ${count * price}$`}</BasketTotal>
      </div>
    </BasketItemStyle>
  );
}

BasketItem.displayName = displayName;
BasketItem.propTypes = propTypes;

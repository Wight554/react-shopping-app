import React from 'react';
import PropTypes from 'prop-types';
import BasketStyle from './BasketStyle';
import MasterPage from '../MasterPage';
import BasketButton from '../../BasketButton';
import BasketItem from '../../BasketItem';
import HeaderTotal from '../../HeaderTotal';

const displayName = 'Basket';

const propTypes = {
  basketProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default function Basket({ basket, basketProducts }) {
  return (
    <MasterPage HeaderItem={HeaderTotal} pageTitle="Basket">
      <BasketStyle>
        {basketProducts.map(product => (
          <BasketItem
            key={product.id}
            count={basket.find(basketProduct => basketProduct.id === product.id).count}
            {...product}
          />
        ))}
      </BasketStyle>
      <BasketButton to="/order">Order</BasketButton>
    </MasterPage>
  );
}

Basket.displayName = displayName;
Basket.propTypes = propTypes;

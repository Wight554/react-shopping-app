import React from 'react';
import PropTypes from 'prop-types';
import BasketStyle from './BasketStyle';
import MasterPage from '../MasterPage';
import BasketButton from '../../BasketButton';
import BasketItem from '../../BasketItem';
import ButtonWrapper from '../../ButtonWrapper';
import HeaderTotal from '../../HeaderTotal';

const displayName = 'Basket';

const propTypes = {
  basket: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number
    }).isRequired
  ).isRequired
};

export default function Basket({ basket }) {
  return (
    <MasterPage HeaderItem={HeaderTotal} pageTitle="Basket">
      <BasketStyle>
        {basket.map(product => (
          <BasketItem key={product.id} count={product.count} {...product} />
        ))}
      </BasketStyle>
      <ButtonWrapper>
        <BasketButton to="/order">Order</BasketButton>
      </ButtonWrapper>
    </MasterPage>
  );
}

Basket.displayName = displayName;
Basket.propTypes = propTypes;

import React from 'react';
import PropTypes from 'prop-types';
import CatalogItemStyle from './CatalogItemStyle';
import CatalogPrice from '../CatalogPrice';
import CatalogButton from '../CatalogButton';
import ItemProduct from '../ItemProduct';
import ItemLogo from '../ItemLogo';

const displayName = 'CatalogItem';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default function CatalogItem({ name, price }) {
  return (
    <CatalogItemStyle>
      <ItemLogo />
      <ItemProduct>{name}</ItemProduct>
      <CatalogPrice>{`${price}$`}</CatalogPrice>
      <CatalogButton>Buy</CatalogButton>
    </CatalogItemStyle>
  );
}

CatalogItem.displayName = displayName;
CatalogItem.propTypes = propTypes;

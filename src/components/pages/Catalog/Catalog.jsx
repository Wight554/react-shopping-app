import React from 'react';
import PropTypes from 'prop-types';
import CatalogStyle from './CatalogStyle';
import MasterPage from '../MasterPage';
import CatalogItem from '../../CatalogItem';
import HeaderBasket from '../../HeaderBasket';

const displayName = 'Catalog';

const propTypes = {
  myProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number
    }).isRequired
  ).isRequired
};

function Catalog({ myProducts }) {
  return (
    <MasterPage HeaderItem={HeaderBasket} pageTitle="Catalog">
      <CatalogStyle>
        {myProducts.map(product => (
          <CatalogItem key={product.id} {...product} />
        ))}
      </CatalogStyle>
    </MasterPage>
  );
}

Catalog.displayName = displayName;
Catalog.propTypes = propTypes;

export default Catalog;

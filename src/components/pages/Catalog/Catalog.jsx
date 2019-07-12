import React from 'react';
import PropTypes from 'prop-types';
import CatalogItem from '../../CatalogItem';

const displayName = 'Catalog';

const propTypes = {
  myProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function Catalog({ myProducts }) {
  return (
    <div>
      {myProducts.map(product => (
        <CatalogItem key={product.id} {...product} />
      ))}
    </div>
  );
}

Catalog.displayName = displayName;
Catalog.propTypes = propTypes;

export default Catalog;

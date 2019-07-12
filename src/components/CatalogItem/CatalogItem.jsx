import React from 'react';
import PropTypes from 'prop-types';

const displayName = 'CatalogItem';

const propTypes = {
  name: PropTypes.string.isRequired
};

export default function CatalogItem({ name }) {
  return <div>{name}</div>;
}

CatalogItem.displayName = displayName;
CatalogItem.propTypes = propTypes;

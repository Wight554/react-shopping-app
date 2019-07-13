import React from 'react';
import PropTypes from 'prop-types';
import CatalogButtonStyle from './CatalogButtonStyle';

const displayName = 'CatalogButton';

const propTypes = {
  children: PropTypes.string.isRequired
};

export default function CatalogButton({ children }) {
  return <CatalogButtonStyle>{children}</CatalogButtonStyle>;
}

CatalogButton.displayName = displayName;
CatalogButton.propTypes = propTypes;

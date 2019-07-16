import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header';

const displayName = 'MasterPage';

const propTypes = {
  children: PropTypes.element.isRequired,
  HeaderItem: PropTypes.elementType,
  pageTitle: PropTypes.string.isRequired
};

const defaultProps = {
  HeaderItem: null
};

export default function MasterPage({ children, HeaderItem, pageTitle }) {
  return (
    <>
      <Header HeaderItem={HeaderItem} pageTitle={pageTitle} />
      {children}
    </>
  );
}

MasterPage.displayName = displayName;
MasterPage.propTypes = propTypes;
MasterPage.defaultProps = defaultProps;

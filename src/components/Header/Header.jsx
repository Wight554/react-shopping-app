import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './HeaderStyle';
import LangDropdown from '../LangDropdown';

const displayName = 'Header';

const propTypes = {
  HeaderItem: PropTypes.elementType,
  pageTitle: PropTypes.string.isRequired
};

const defaultProps = {
  HeaderItem: null
};

export default function Header({ HeaderItem, pageTitle }) {
  return (
    <HeaderStyle>
      <div>
        <LangDropdown />
        <span>{pageTitle}</span>
      </div>
      {React.createElement(HeaderItem)}
    </HeaderStyle>
  );
}

Header.displayName = displayName;
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

import React from 'react';
import PropTypes from 'prop-types';
import HeaderTotalStyle from './HeaderTotalStyle';

const displayName = 'HeaderTotal';

const propTypes = {
  totalCount: PropTypes.number
};

const defaultProps = {
  totalCount: 0
};

export default function HeaderTotal({ totalCount }) {
  return <HeaderTotalStyle>{`Total Price: ${totalCount}$`}</HeaderTotalStyle>;
}

HeaderTotal.displayName = displayName;
HeaderTotal.propTypes = propTypes;
HeaderTotal.defaultProps = defaultProps;

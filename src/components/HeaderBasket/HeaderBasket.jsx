import React from 'react';
import { Link } from 'react-router-dom';

const displayName = 'HeaderBasket';

export default function HeaderBasket() {
  return <Link to="/basket">Basket</Link>;
}

HeaderBasket.displayName = displayName;

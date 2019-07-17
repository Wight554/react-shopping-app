import { createSelector } from 'reselect';

const getBasket = createSelector(
  state => state.get('basketProducts'),
  basket => basket
);

export default getBasket;

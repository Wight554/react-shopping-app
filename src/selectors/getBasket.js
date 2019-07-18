import { createSelector } from 'reselect';

const getBasket = createSelector(
  state => state.get('basket'),
  basket => basket
);

export default getBasket;

import { createSelector } from 'reselect';

const getBasketProducts = createSelector(
  [state => state.get('basketProducts'), state => state.get('products')],
  (basket, products) => products.filter(p => [...basket.map(item => item.get('id')).values()].includes(p.get('id')))
);

export default getBasketProducts;

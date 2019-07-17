import { createSelector } from 'reselect';

const getTotalCount = createSelector(
  [state => state.get('basketProducts'), state => state.get('products')],
  (basket, products) =>
    basket
      .map(
        basketProduct =>
          products.find(product => basketProduct.get('id') === product.get('id')).get('price') *
          basketProduct.get('count')
      )
      .reduce((a, b) => a + b)
);

export default getTotalCount;

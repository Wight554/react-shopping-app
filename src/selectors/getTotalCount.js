import { createSelector } from 'reselect';

const getTotalCount = createSelector(
  state => state.get('basket'),
  basket => basket.map(products => products.get('price') * products.get('count')).reduce((a, b) => a + b)
);

export default getTotalCount;

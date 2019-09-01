import { fromJS } from 'immutable';
import getProducts from './getProducts';

describe('Given the getProducts selector', () => {
  const currentStoreState = fromJS({
    products: [{ id: 1, name: 'Product 1', price: 1 }, { id: 2, name: 'Product 2', price: 2 }]
  });

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getProducts(currentStoreState);
    });

    it('should return all products from the store', () => {
      expect(result.equals(currentStoreState.getIn(['products']))).toBe(true);
    });
  });
});

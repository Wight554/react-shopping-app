import { fromJS } from 'immutable';
import getBasketProducts from './getBasketProducts';

describe('Given the getBasketProducts selector', () => {
  const currentStoreState = fromJS({
    products: [
      { id: 1, name: 'Product 1', price: 1 },
      { id: 2, name: 'Product 2', price: 2 },
      { id: 3, name: 'Product 3', price: 3 }
    ],
    basketProducts: [{ id: 1, count: 1 }, { id: 2, count: 2 }]
  });

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getBasketProducts(currentStoreState);
    });

    it('should return all products that match basket ones from the store', () => {
      expect(
        result.equals(fromJS([{ id: 1, name: 'Product 1', price: 1 }, { id: 2, name: 'Product 2', price: 2 }]))
      ).toBe(true);
    });
  });
});

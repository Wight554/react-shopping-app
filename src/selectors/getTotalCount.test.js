import { fromJS } from 'immutable';
import getTotalCount from './getTotalCount';

describe('Given the getTotalCount selector', () => {
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
      result = getTotalCount(currentStoreState);
    });
    it('should return total price of products in basket', () => {
      expect(result === 5).toBe(true);
    });
  });
});

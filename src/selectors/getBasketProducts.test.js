import { fromJS } from 'immutable';
import getBasketProducts from './getBasketProducts';
import mockStore from '../mockStore';

describe('Given the getBasketProducts selector', () => {
  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getBasketProducts(mockStore.getState());
    });

    it('should return all products that match basket ones from the store', () => {
      expect(
        result.equals(fromJS([{ id: 1, name: 'Product 1', price: 1 }, { id: 2, name: 'Product 2', price: 2 }]))
      ).toBe(true);
    });
  });
});

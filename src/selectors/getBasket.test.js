import { fromJS } from 'immutable';
import getBasket from './getBasket';

describe('Given the getBasket selector', () => {
  const currentStoreState = fromJS({
    basketProducts: [{ id: 1, count: 1 }, { id: 2, count: 2 }]
  });

  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getBasket(currentStoreState);
    });

    it('should return all basket products from the store', () => {
      expect(result.equals(currentStoreState.getIn(['basketProducts']))).toBe(true);
    });
  });
});

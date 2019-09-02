import getBasket from './getBasket';
import mockStore from '../mockStore';

describe('Given the getBasket selector', () => {
  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getBasket(mockStore.getState());
    });

    it('should return all basket products from the store', () => {
      expect(result).toMatchObject(mockStore.getState().getIn(['basketProducts']));
    });
  });
});

import getProducts from './getProducts';
import mockStore from '../mockStore';

describe('Given the getProducts selector', () => {
  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getProducts(mockStore.getState());
    });

    it('should return all products from the store', () => {
      expect(result).toMatchObject(mockStore.getState().getIn(['products']));
    });
  });
});

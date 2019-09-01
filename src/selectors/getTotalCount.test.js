import getTotalCount from './getTotalCount';
import mockStore from '../mockStore';

describe('Given the getTotalCount selector', () => {
  describe('when the selector is called', () => {
    let result;

    beforeEach(() => {
      result = getTotalCount(mockStore.getState());
    });
    it('should return total price of products in basket', () => {
      expect(result === 5).toBe(true);
    });
  });
});

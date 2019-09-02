import changeProductCount from './changeProductCount';

describe('Given the changeProductCount action', () => {
  let action;

  describe('when the action is called', () => {
    let product;

    beforeEach(() => {
      action = changeProductCount(product);
    });

    it('should have the CHANGE_PRODUCT_COUNT type', () => {
      expect(action.type).toBe('CHANGE_PRODUCT_COUNT');
    });

    describe('and product data is provided', () => {
      beforeAll(() => {
        product = { id: 1, count: 2 };
      });

      it('should create payload with the provided product data', () => {
        expect(action.payload.id).toBe(1);
        expect(action.payload.count).toBe(2);
      });
    });

    describe('and product data is not provided', () => {
      beforeAll(() => {
        product = null;
      });

      it('should create payload without the provided product data', () => {
        expect(action.payload).toBeNull();
      });
    });
  });
});

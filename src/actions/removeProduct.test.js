import removeProduct from './removeProduct';

describe('Given the removeProduct action', () => {
  let action;

  describe('when the action is called', () => {
    let id;

    beforeEach(() => {
      action = removeProduct(id);
    });

    it('should have the REMOVE_PRODUCT type', () => {
      expect(action.type).toBe('REMOVE_PRODUCT');
    });

    describe('and id of a product is provided', () => {
      beforeAll(() => {
        id = 1;
      });

      it('should create payload with the provided product id', () => {
        expect(action.payload).toBe(1);
      });
    });

    describe('and id of a product is not provided', () => {
      beforeAll(() => {
        id = null;
      });

      it('should create payload without the provided product id', () => {
        expect(action.payload).toBeNull();
      });
    });
  });
});

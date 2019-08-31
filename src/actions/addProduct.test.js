import addProduct from './addProduct';

describe('Given the addProduct action', () => {
  let action;

  describe('when the action is called', () => {
    let id;

    beforeEach(() => {
      action = addProduct(id);
    });

    it('should have the ADD_PRODUCT type', () => {
      expect(action.type).toBe('ADD_PRODUCT');
    });

    describe('and id of a product is provided', () => {
      beforeAll(() => {
        id = 1;
      });

      it('should create payload with the provided product id', () => {
        expect(action.payload.id).toBe(1);
      });
    });

    describe('and id of a product is not provided', () => {
      beforeAll(() => {
        id = null;
      });

      it('should create payload without the provided product id', () => {
        expect(action.payload.id).toBeNull();
      });
    });
  });
});

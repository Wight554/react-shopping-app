import { Map } from 'immutable';
import { basketProducts, initialBasketProductsState } from './basketProducts';

describe('Given the products reducer', () => {
  describe('when the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined
    };

    let currentBasketProductsState = initialBasketProductsState;
    let newState;

    beforeEach(() => {
      newState = basketProducts(currentBasketProductsState, testAction);
    });

    describe("and the ADD_PRODUCT action is dispatched when product doesn't exist", () => {
      beforeAll(() => {
        testAction.type = 'ADD_PRODUCT';
        testAction.payload = { id: 1 };
      });

      it('should return a new state with the provided product', () => {
        expect(newState).toEqual(currentBasketProductsState.push(Map({ id: testAction.payload.id, count: 1 })));
      });
    });

    describe('and the ADD_PRODUCT action is dispatched when product already exists', () => {
      beforeAll(() => {
        currentBasketProductsState = currentBasketProductsState.push(Map({ id: 1, count: 1 }));
        testAction.type = 'ADD_PRODUCT';
        testAction.payload = { id: 1 };
      });

      it('should return a new state with the provided product and incremented count', () => {
        expect(newState).toEqual(
          currentBasketProductsState.setIn(
            [currentBasketProductsState.findIndex(item => item.get('id') === testAction.payload.id), 'count'],
            2
          )
        );
      });
    });

    describe('and the CHANGE_PRODUCT_COUNT action is dispatched', () => {
      beforeAll(() => {
        currentBasketProductsState = currentBasketProductsState.push(Map({ id: 1, count: 1 }));
        testAction.type = 'CHANGE_PRODUCT_COUNT';
        testAction.payload = { id: 1, count: 5 };
      });

      it('should return a new state of product with the provided product count', () => {
        expect(newState).toEqual(
          currentBasketProductsState.setIn(
            [currentBasketProductsState.findIndex(item => item.get('id') === testAction.payload.id), 'count'],
            testAction.payload.count
          )
        );
      });
    });

    describe('and the REMOVE_PRODUCT action is dispatched', () => {
      beforeAll(() => {
        currentBasketProductsState = initialBasketProductsState.push(Map({ id: 111, name: 'Product 111' }));

        testAction.type = 'REMOVE_PRODUCT';
        testAction.payload = 111;
      });

      it('should return a new state without removed product', () => {
        expect(newState).toMatchObject(initialBasketProductsState);
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = '111';
      });

      it('should return the current state', () => {
        expect(newState).toMatchObject(currentBasketProductsState);
      });
    });
  });
});

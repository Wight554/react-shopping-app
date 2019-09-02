import { fromJS } from 'immutable';
import { products, initialProductsState } from './products';

describe('Given the products reducer', () => {
  describe('when the reducer is called', () => {
    const testAction = {
      type: '',
      payload: undefined
    };

    let currentProductsState = initialProductsState;
    let newState;

    beforeEach(() => {
      newState = products(currentProductsState, testAction);
    });

    describe('and the FETCH_PRODUCTS_FULFILLED action is dispatched', () => {
      beforeAll(() => {
        currentProductsState = initialProductsState;

        testAction.type = 'FETCH_PRODUCTS_FULFILLED';
        testAction.payload = {
          data: [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]
        };
      });

      it('should return a new state with fetched products only', () => {
        expect(newState).toMatchObject(fromJS(testAction.payload.data));
      });
    });

    describe('and the action dispatched is unknown', () => {
      beforeAll(() => {
        testAction.type = 'UNKNOWN_ACTION';
        testAction.payload = '111';
      });

      it('should return the current state', () => {
        expect(newState).toMatchObject(currentProductsState);
      });
    });
  });
});

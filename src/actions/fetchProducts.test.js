import fetchProducts from './fetchProducts';

jest.mock('axios', () => ({
  get: jest.fn((url, config) => ({ url, config }))
}));

describe('Given the fetchProducts action', () => {
  describe('when the action is called', () => {
    let thunk;

    beforeEach(() => {
      thunk = fetchProducts();
    });

    it('should return a thunk function', () => {
      expect(thunk).toBeInstanceOf(Function);
    });

    describe('and the thunk is called', () => {
      let dispatchMock;
      let action;

      beforeEach(() => {
        dispatchMock = jest.fn(_ => _);

        action = thunk(dispatchMock);
      });

      it('should dispatch the FETCH_PRODUCTS async action', () => {
        expect(dispatchMock).toHaveBeenCalledTimes(1);
        expect(action).toEqual({
          type: 'FETCH_PRODUCTS',
          payload: {
            url: 'http://localhost:2000/products'
          }
        });
      });
    });
  });
});

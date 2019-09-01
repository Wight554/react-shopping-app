import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { fromJS } from 'immutable';

const middlewares = [thunkMiddleware];

const mockStore = configureStore(middlewares)(
  fromJS({
    products: [
      { id: 1, name: 'Product 1', price: 1 },
      { id: 2, name: 'Product 2', price: 2 },
      { id: 3, name: 'Product 3', price: 3 }
    ],
    basketProducts: [{ id: 1, count: 1 }, { id: 2, count: 2 }]
  })
);

export default mockStore;

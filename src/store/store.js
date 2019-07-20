import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';
import promise from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form/immutable';
import { products, initialProductsState } from '../reducers/products';
import { basketProducts, initialBasketProductsState } from '../reducers/basketProducts';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, promise));

const initialStoreState = Map({
  products: initialProductsState,
  basketProducts: initialBasketProductsState
});

const store = createStore(
  combineReducers({
    products,
    basketProducts,
    form: formReducer
  }),
  initialStoreState,
  enhancer
);

export default store;

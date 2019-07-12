import axios from 'axios';
import { createAction } from 'redux-actions';
import { FETCH_PRODUCTS } from './types';

const payloadCreator = () => axios.get(`http://${window.location.hostname}:2000/products`);

const fetchProductsAsync = createAction(FETCH_PRODUCTS, payloadCreator);

const fetchProducts = () => dispatch => dispatch(fetchProductsAsync());

fetchProducts.toString = fetchProductsAsync.toString;

export default fetchProducts;

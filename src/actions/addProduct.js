import { createAction } from 'redux-actions';
import { ADD_PRODUCT } from './types';

const addProduct = createAction(ADD_PRODUCT, product => product);

export default addProduct;

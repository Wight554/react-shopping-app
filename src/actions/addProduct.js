import { createAction } from 'redux-actions';
import { ADD_PRODUCT } from './types';

const addProduct = createAction(ADD_PRODUCT, id => ({ id }));

export default addProduct;

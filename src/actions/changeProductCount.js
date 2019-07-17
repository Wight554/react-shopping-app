import { createAction } from 'redux-actions';
import { CHANGE_PRODUCT_COUNT } from './types';

const changeProductCount = createAction(CHANGE_PRODUCT_COUNT, product => product);

export default changeProductCount;

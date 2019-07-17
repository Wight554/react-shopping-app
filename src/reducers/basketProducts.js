import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import addProduct from '../actions/addProduct';
import removeProduct from '../actions/removeProduct';
import changeProductCount from '../actions/changeProductCount';

export const initialBasketProductsState = List();

export const basketProducts = handleActions(
  {
    [addProduct]: (state, action) => {
      const targetMapIdx = state.findIndex(item => item.get('id') === action.payload.id);
      if (targetMapIdx === -1) return state.push(Map({ ...action.payload, count: 1 }));
      return state.setIn([targetMapIdx, 'count'], state.getIn([targetMapIdx, 'count']) + 1);
    },
    [removeProduct]: (state, { payload }) => state.remove(state.findIndex(p => p.get('id') === payload)),
    [changeProductCount]: (state, action) => {
      const targetMapIdx = state.findIndex(item => item.get('id') === action.payload.id);
      return state.setIn([targetMapIdx, 'count'], action.payload.count);
    }
  },
  initialBasketProductsState
);

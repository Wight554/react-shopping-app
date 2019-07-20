import { compose, withHandlers, withState, setDisplayName } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BasketItem from './BasketItem';
import changeCount from '../../actions/changeProductCount';
import removeProduct from '../../actions/removeProduct';

export const enhance = compose(
  setDisplayName('BasketItemContainer'),
  connect(
    null,
    dispatch =>
      bindActionCreators(
        {
          dispatchChangeCount: changeCount,
          dispatchRemoveProduct: removeProduct
        },
        dispatch
      )
  ),
  withState('count', 'setCount', ({ count }) => count),
  withHandlers({
    handleChangeCount: ({ dispatchChangeCount, dispatchRemoveProduct, setCount, id }) => event => {
      setCount(event.currentTarget.value);
      dispatchChangeCount({ id, count: Number(event.currentTarget.value) });
      if (event.currentTarget.value <= 0) {
        dispatchRemoveProduct(id);
      }
    }
  })
);

export default enhance(BasketItem);

import { compose, setDisplayName, mapProps } from 'recompose';
import { connect } from 'react-redux';
import Basket from './Basket';
import getBasket from '../../../selectors/getBasket';
import getBasketProducts from '../../../selectors/getBasketProducts';

export const enhance = compose(
  setDisplayName('BasketContainer'),
  connect(
    state => ({
      basket: getBasket(state),
      basketProducts: getBasketProducts(state)
    }),
    null
  ),
  mapProps(props => ({
    ...props,
    basket: props.basket.toJS(),
    basketProducts: props.basketProducts.toJS()
  }))
);

export default enhance(Basket);

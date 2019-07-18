import { compose, setDisplayName, mapProps } from 'recompose';
import { connect } from 'react-redux';
import Basket from './Basket';
import getBasket from '../../../selectors/getBasket';

export const enhance = compose(
  setDisplayName('BasketContainer'),
  connect(
    state => ({
      basket: getBasket(state)
    }),
    null
  ),
  mapProps(props => ({
    ...props,
    basket: props.basket.toJS()
  }))
);

export default enhance(Basket);

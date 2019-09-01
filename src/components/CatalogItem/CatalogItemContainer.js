import { compose, withHandlers, setDisplayName } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CatalogItem from './CatalogItem';
import addProduct from '../../actions/addProduct';

export const handlers = {
  handleAddProduct: ({ dispatchAddProduct, id }) => () => {
    dispatchAddProduct(id);
  }
};

export const enhance = compose(
  setDisplayName('CatalogItemContainer'),
  connect(
    null,
    dispatch =>
      bindActionCreators(
        {
          dispatchAddProduct: addProduct
        },
        dispatch
      )
  ),
  withHandlers(handlers)
);

export default enhance(CatalogItem);

import { compose, withHandlers, setDisplayName } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CatalogItem from './CatalogItem';
import addProduct from '../../actions/addProduct';

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
  withHandlers({
    handleAddProduct: ({ dispatchAddProduct, id }) => () => {
      dispatchAddProduct(id);
    }
  })
);

export default enhance(CatalogItem);

import { compose, setDisplayName } from 'recompose';
import { reduxForm } from 'redux-form/immutable';
import OrderForm from './OrderForm';
import orderValidator from '../../validators/orderValidator';

export const enhance = compose(
  setDisplayName('OrderFormContainer'),
  reduxForm({
    form: 'order',
    validate: orderValidator
  })
);

export default enhance(OrderForm);

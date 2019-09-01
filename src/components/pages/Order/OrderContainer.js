import { compose, withHandlers, setDisplayName } from 'recompose';
import Order from './Order';

export const handlers = {
  handleSubmit: ({ history: { push } }) => () => {
    push('/thankyou');
  }
};

export const enhance = compose(
  setDisplayName('OrderContainer'),
  withHandlers(handlers)
);

export default enhance(Order);

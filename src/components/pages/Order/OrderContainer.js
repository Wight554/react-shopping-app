import { compose, withHandlers, setDisplayName } from 'recompose';
import Order from './Order';

export const enhance = compose(
  setDisplayName('OrderContainer'),
  withHandlers({
    handleSubmit: ({ history: { push } }) => () => {
      push('/thankyou');
    }
  })
);

export default enhance(Order);

import { compose, setDisplayName, mapProps } from 'recompose';
import { connect } from 'react-redux';
import HeaderTotal from './HeaderTotal';
import getTotalCount from '../../selectors/getTotalCount';

export const enhance = compose(
  setDisplayName('HeaderTotalContainer'),
  connect(
    state => ({
      totalCount: getTotalCount(state)
    }),
    null
  ),
  mapProps(props => ({
    ...props,
    totalCount: props.totalCount
  }))
);

export default enhance(HeaderTotal);

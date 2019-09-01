import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { enhance } from './HeaderTotalContainer';
import getTotalCount from '../../selectors/getTotalCount';
import mockStore from '../../mockStore';

describe('Given the HeaderTotalContainer enhancer', () => {
  describe('when the enhancer is applied', () => {
    let providedProps;

    beforeEach(() => {
      const DummyContainer = enhance(
        createSink(props => {
          providedProps = props;
        })
      );

      mount(
        <Provider store={mockStore}>
          <DummyContainer />
        </Provider>
      );
    });

    it('should pass provided properties', () => {
      expect(providedProps.totalCount === getTotalCount(mockStore.getState())).toBe(true);
    });
  });
});

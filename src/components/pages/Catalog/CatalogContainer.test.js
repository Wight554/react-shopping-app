import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { enhance } from './CatalogContainer';
import getProducts from '../../../selectors/getProducts';
import mockStore from '../../../mockStore';

jest.mock('axios', () => ({
  get: jest.fn((url, config) => ({ url, config }))
}));

describe('Given the CatalogContainer enhancer', () => {
  describe('when the enhancer is applied', () => {
    let providedProps;
    let DummyContainer;

    beforeEach(() => {
      DummyContainer = enhance(
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
      expect(providedProps.dispatchFetchProducts).toBeInstanceOf(Function);
      expect(providedProps.myProducts).toMatchObject(getProducts(mockStore.getState()).toJS());
    });
    it('should call the dispatchFetchProducts function', () => {
      const dispatchFetchProducts = jest.fn();
      shallow(<DummyContainer.WrappedComponent dispatchFetchProducts={dispatchFetchProducts} />);
      expect(dispatchFetchProducts).toHaveBeenCalledTimes(1);
    });
  });
});

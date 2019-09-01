import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { enhance, handlers } from './CatalogItemContainer';
import mockStore from '../../mockStore';

describe('Given the CatalogItemContainer enhancer', () => {
  const testProps = {
    dispatchAddProduct: jest.fn(),
    id: 1
  };

  describe('Given a handleAddProduct handlers', () => {
    describe('when the handleAddProduct is called', () => {
      beforeEach(() => {
        handlers.handleAddProduct(testProps)();
      });

      it('should call the dispatchAddProduct function', () => {
        expect(testProps.dispatchAddProduct).toHaveBeenCalledWith(testProps.id);
      });
    });
  });

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
      expect(providedProps.dispatchAddProduct).toBeInstanceOf(Function);
      expect(providedProps.handleAddProduct).toBeInstanceOf(Function);
    });
  });
});

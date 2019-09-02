import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { enhance, handlers } from './BasketItemContainer';
import mockStore from '../../mockStore';

describe('Given the BasketItemContainer enhancer', () => {
  const testProps = {
    dispatchChangeCount: jest.fn(),
    dispatchRemoveProduct: jest.fn(),
    setCount: jest.fn(),
    id: 1
  };

  describe('Given a handleChangeCount handler', () => {
    let event;
    beforeEach(() => {
      handlers.handleChangeCount(testProps)(event);
    });
    describe('when the handleChangeCount is called with positive count', () => {
      beforeAll(() => {
        event = { currentTarget: { value: 2 } };
      });
      it('should call the setCount function', () => {
        expect(testProps.setCount).toHaveBeenCalledWith(event.currentTarget.value);
      });
      it('should call the dispatchChangeCount function', () => {
        expect(testProps.dispatchChangeCount).toHaveBeenCalledWith({
          id: testProps.id,
          count: event.currentTarget.value
        });
      });
    });
    describe('when the handleChangeCount is called with count equal to zero', () => {
      beforeAll(() => {
        event = { currentTarget: { value: 0 } };
      });
      it('should call the dispatchRemoveProduct function', () => {
        expect(testProps.dispatchRemoveProduct).toHaveBeenCalledWith(testProps.id);
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
      expect(providedProps.dispatchChangeCount).toBeInstanceOf(Function);
      expect(providedProps.dispatchRemoveProduct).toBeInstanceOf(Function);
      expect(providedProps.handleChangeCount).toBeInstanceOf(Function);
    });
  });
});

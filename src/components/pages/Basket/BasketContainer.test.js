import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createSink } from 'recompose';
import { enhance } from './BasketContainer';
import getBasket from '../../../selectors/getBasket';
import getBasketProducts from '../../../selectors/getBasketProducts';
import mockStore from '../../../mockStore';

describe('Given the BasketContainer enhancer', () => {
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
      expect(providedProps.basket).toMatchObject(getBasket(mockStore.getState()).toJS());
      expect(providedProps.basketProducts).toMatchObject(getBasketProducts(mockStore.getState()).toJS());
    });
  });
});

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../Header';
import Catalog from '../pages/Catalog';
import Basket from '../pages/Basket';
import Order from '../pages/Order';
import ThankYou from '../pages/ThankYou';

const displayName = 'App';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/basket" component={Basket} />
          <Route path="/order" component={Order} />
          <Route path="/thankyou" component={ThankYou} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

App.displayName = displayName;

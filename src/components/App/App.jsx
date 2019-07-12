import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Catalog from '../pages/Catalog';
import Basket from '../pages/Basket';
import Order from '../pages/Order';
import ThankYou from '../pages/ThankYou';

const displayName = 'App';

export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Catalog} />
          <Route path="/basket" component={Basket} />
          <Route path="/order" component={Order} />
          <Route path="/thankyou" component={ThankYou} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

App.displayName = displayName;

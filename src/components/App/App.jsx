import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Catalog from '../pages/Catalog';
import Basket from '../pages/Basket';
import Order from '../pages/Order';
import ThankYou from '../pages/ThankYou';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <>
        <Route path="/" exact component={Catalog} />
        <Route path="/basket" component={Basket} />
        <Route path="/order" component={Order} />
        <Route path="/thankyou" component={ThankYou} />
      </>
    </ThemeProvider>
  );
}

App.displayName = displayName;

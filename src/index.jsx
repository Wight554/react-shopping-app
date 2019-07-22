import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import store from './store';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

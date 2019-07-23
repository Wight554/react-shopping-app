import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const displayName = 'App';

export default function App() {
  return (
    <ThemeProvider theme={{}}>
      <Route path="/" exact />
    </ThemeProvider>
  );
}

App.displayName = displayName;

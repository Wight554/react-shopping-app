import React from 'react';
import { Route } from 'react-router-dom';

const displayName = 'App';

export default function App() {
  return <Route path="/" exact />;
}

App.displayName = displayName;

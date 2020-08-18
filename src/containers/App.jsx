import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReposPage from '../pages/ReposPage';
import GlobalStyles from '../styles/globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={ReposPage} />
      </Switch>
    </>
  );
}

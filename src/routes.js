import React from 'react';
import { CoinList } from './views/CoinList';
import { News } from './views/News';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/CoinList" component={CoinList} />
        <Route exact path="/">
          <Redirect to="/CoinList" />
        </Route>
        <Route exact path="/News" component={News} />
      </Switch>
    </div>
  );
};
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Carro from '../views/Carro';
import Frota from '../views/Frota';
import Home from '../views/Home';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/frota">
          <Frota />
        </Route>
        <Route exact path="/frota/:id">
          <Carro />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

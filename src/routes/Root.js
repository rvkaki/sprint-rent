import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Carro from '../views/Carro';
import Checkout from '../views/Checkout';
import Contacts from '../views/Contacts';
import Franchising from '../views/Franchising';
import Frota from '../views/Frota';
import Home from '../views/Home';
import Sale from '../views/Sale';

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
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/sale">
          <Sale />
        </Route>
        <Route exact path="/franchising">
          <Franchising />
        </Route>
        <Route exact path="/contactos">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Carro from '../views/Carro';
import Checkout from '../views/Checkout';
import Contacts from '../views/Contacts';
import Franchising from '../views/Franchising';
import Frota from '../views/Frota';
import Home from '../views/Home';
import Offer from '../views/Offer';
import OfferCheckout from '../views/OfferCheckout';
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
        <Route exact path="/checkout/carro">
          <Checkout />
        </Route>
        <Route exact path="/checkout/oferta">
          <OfferCheckout />
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
        <Route exact path="/ofertas/:id">
          <Offer />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Root;

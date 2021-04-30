import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HOME, UPDATE, DETAILS } from '../constants/routes';
import { Home, Update, Details } from '../pages';

const Router = () => (
  <BrowserRouter>
    <Route exact path={HOME} component={Home} />
    <Route exact path={UPDATE} component={Update} />
    <Route exact path={DETAILS} component={Details} />
  </BrowserRouter>
);

export default Router;

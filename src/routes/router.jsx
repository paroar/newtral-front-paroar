import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  HOME, CREATE, UPDATE, DETAILS,
} from '../constants/routes';
import {
  Home, Create, Update, Details,
} from '../pages';

const Router = () => (
  <BrowserRouter>
    <Route exact path={HOME} component={Home} />
    <Route exact path={CREATE} component={Create} />
    <Route exact path={`${UPDATE}/:id`} component={Update} />
    <Route exact path={`${DETAILS}/:id`} component={Details} />
  </BrowserRouter>
);

export default Router;

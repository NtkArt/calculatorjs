import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from '../pages/Calculator/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Calculator} />
  </Switch>
);

export default Routes;

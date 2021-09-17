import React from 'react';
import { Switch, Route } from 'react-router';
// Pages
import Home from 'pages/Home';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Router;

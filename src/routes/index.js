import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Recipe from '../pages/Recipe';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/recipe" component={Recipe} />
    </Switch>
  );
}

export default Routes;
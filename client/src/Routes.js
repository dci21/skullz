import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Welcome, Main } from './components';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;

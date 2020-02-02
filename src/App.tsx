import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './pages/index';
import Providers from './utils/Providers';

const App = () => (
  <Providers>
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  </Providers>
);

export default hot(App);

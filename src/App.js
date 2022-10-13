import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Films from './pages/Films';
import People from './pages/People';
import Locations from './pages/Locations';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Films} />
      <Route exact path="/people" component={People} />
      <Route exact path="/locations" component={Locations} />
    </Switch>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Films from './pages/Films';
import People from './pages/People';
import Locations from './pages/Locations';
import FilmDetails from './pages/FilmDetails';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Films} />
      <Route path="/films/:id" component={FilmDetails} />
      <Route path="/people" component={People} />
      <Route path="/locations" component={Locations} />
    </Switch>
  );
}

export default App;

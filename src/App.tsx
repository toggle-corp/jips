import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';

import {Home, Dashboard} from './Views';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* Redirect all other paths to homepge */}
        <Route path="**/**">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;

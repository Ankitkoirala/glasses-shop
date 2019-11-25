import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

import {Route,Switch} from 'react-router-dom'

const HatPage = ()=>(
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
)

function App() {
  return (
    <div>
    {/* <HomePage/> */}
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/hats' component={HatPage} />
    </Switch>
    </div>

  );
}

export default App;

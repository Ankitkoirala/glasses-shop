import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'


function App() {
  return (
    <div>
    {/* <HomePage/> */}
    <Header/>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/signin' component={SignInAndSignUpPage} />

    </Switch>
    </div>

  );
}

export default App;

import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { connect } from 'react-redux'


import { setCurrentUser } from './redux/user/user.action'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {


  unsubscrbeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscrbeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        console.log(this.state);
  }
else{
  setCurrentUser( userAuth )
}
  })
 
}
componentWillUnmount(){
  this.unsubscrbeFromAuth();
}

render(){
  return (
    <div>
      {/* <HomePage/> */}
      <Header  />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />

      </Switch>
    </div>

  );
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default  connect(null, mapDispatchToProps) (App);

import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import {Route,Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
constructor(){
  super()

  this.state={
    currentUser:null
  }
}

unsubscrbeFromAuth=null

componentDidMount(){
 this.unsubscrbeFromAuth= auth.onAuthStateChanged(async userAuth=>{
if(userAuth){
  const userRef = await createUserProfileDocument(userAuth)
  userRef.onSnapshot(snapShot =>{
this.setState({
  currentUser:{
    id:snapShot.id,
    ...snapShot.data()
  }
})
  console.log(this.state);
  })

 

}
else{
  this.setState({currentUser:userAuth})
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
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/signin' component={SignInAndSignUpPage} />

    </Switch>
    </div>

  );
  }
}

export default App;

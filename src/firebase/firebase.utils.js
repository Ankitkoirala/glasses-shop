import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config ={
         apiKey: "AIzaSyA5CvG3y7mK63ShZMmSvkq02IIdkd2Qp7U",
        authDomain: "suncity-55330.firebaseapp.com",
        databaseURL: "https://suncity-55330.firebaseio.com",
        projectId: "suncity-55330",
        storageBucket: "suncity-55330.appspot.com",
        messagingSenderId: "369827736379",
        appId: "1:369827736379:web:a0f410a71407b72ef7251e",
        measurementId: "G-SD4LSWKJRK"
      };

      export const createUserProfileDocument = async(userAuth,additionalData)=>{
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userRef.get();
    
        if(!snapShot.exists) {
          const {displayName,email} = userAuth;
          const createdAt =  new Date();

          try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          }catch(err){
            console.log('error creating user',err.message)
          }
        }
        return userRef

      }

      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});
      export const signInWithGoogle=()=>auth.signInWithPopup(provider);

      export default firebase;


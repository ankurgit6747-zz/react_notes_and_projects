// step 1 : import firebase
import firebase from 'firebase'
// import firebase from 'firebase/index';

// step 2 : Grap the config data from firebase and paste it 
const firebaseConfig = {
    apiKey: "AIzaSyCuV00C8_sSGCAfZDZZLjEKeOeohxqnx4E",
    authDomain: "auth-redux-app-4a5ec.firebaseapp.com",
    projectId: "auth-redux-app-4a5ec",
    storageBucket: "auth-redux-app-4a5ec.appspot.com",
    messagingSenderId: "537537729800",
    appId: "1:537537729800:web:3daa081b142dc04a1c08bd"
  };

// step 3 : Create a firebaseApp using the firebase.initialize method and through in firebase config 
const firebaseApp = firebase.initializeApp(firebaseConfig)

//step 4 :
const auth = firebase.auth()

// step 5 : 
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
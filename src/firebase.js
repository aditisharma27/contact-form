import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
    apiKey: "AIzaSyC914qVNKrzCrjtNk5aBjSju4Re8SX3KBs",
    authDomain: "contact-form-4b0df.firebaseapp.com",
    projectId: "contact-form-4b0df",
    storageBucket: "contact-form-4b0df.appspot.com",
    messagingSenderId: "912060428331",
    appId: "1:912060428331:web:9df572f78db4eb3608fa6e"
  }; 

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  
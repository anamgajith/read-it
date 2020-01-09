import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDI4cCKKSQqFEfAow0htYXhuJdEd0MmAps",
  authDomain: "read-it-cdaf6.firebaseapp.com",
  databaseURL: "https://read-it-cdaf6.firebaseio.com",
  projectId: "read-it-cdaf6",
  storageBucket: "read-it-cdaf6.appspot.com",
  messagingSenderId: "357181293610",
  appId: "1:357181293610:web:69e76b3bdecdf86be12f53",
  measurementId: "G-T7NGMTJL1D"
};


firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

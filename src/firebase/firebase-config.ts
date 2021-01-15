import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBZ56XqsAqXLlzbX3iuOIcncrjISO8uHDE',
  authDomain: 'happyproject-c7aea.firebaseapp.com',
  projectId: 'happyproject-c7aea',
  storageBucket: 'happyproject-c7aea.appspot.com',
  messagingSenderId: '191982819074',
  appId: '1:191982819074:web:037e9d1da5f4162bf1d41b'
};

firebase.initializeApp( firebaseConfig );

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  googleAuthProvider
};

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import * as firebase from 'firebase';
//import 'firebase/friestore'
import App from './App';


/*

//firestore authentication
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



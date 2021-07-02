import React from 'react'
import   firebase from 'firebase/app'
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_ABcRUHJ0ozeETjr6R6KybcXOVnWuDV8",
    authDomain: "databaseproject1-d6144.firebaseapp.com",
    databaseURL: "https://databaseproject1-d6144-default-rtdb.firebaseio.com",
    projectId: "databaseproject1-d6144",
    storageBucket: "databaseproject1-d6144.appspot.com",
    messagingSenderId: "373602628000",
    appId: "1:373602628000:web:d73687f68375fcb73674c5",
    measurementId: "G-WX6B1DX6L2"
  };
  var db=  firebase.initializeApp(firebaseConfig);
  //export default firebase.ref();
 export const auth = firebase.auth(); 
 export default db.database().ref();

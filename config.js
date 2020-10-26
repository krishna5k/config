import *as firebase from "firebase";
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyCYAbUv3M2mHcpF9KRLOfB8jFS8urJIC28",
    authDomain: "wireless-library-1822e.firebaseapp.com",
    databaseURL: "https://wireless-library-1822e.firebaseio.com",
    projectId: "wireless-library-1822e",
    storageBucket: "wireless-library-1822e.appspot.com",
    messagingSenderId: "59727220002",
    appId: "1:59727220002:web:c56690d9fa1be2eff4e97b",
    measurementId: "G-NJ481GDM5T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
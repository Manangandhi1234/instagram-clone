import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCwgUrqe2QdjhRCtwWbq7AeJvGzR2_oWCY",
    authDomain: "instagram-clone-6e10f.firebaseapp.com",
    databaseURL: "https://instagram-clone-6e10f.firebaseio.com",
    projectId: "instagram-clone-6e10f",
    storageBucket: "instagram-clone-6e10f.appspot.com",
    messagingSenderId: "936533098867",
    appId: "1:936533098867:web:e443ef8aa294cf4cec8506",
    measurementId: "G-SQ13MX14VL"
  });

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

  // export default db;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAARdJe2IID3Yd7Rkir42W29MW3U6go6FU",
    authDomain: "twitter-clone-d2317.firebaseapp.com",
    projectId: "twitter-clone-d2317",
    storageBucket: "twitter-clone-d2317.appspot.com",
    messagingSenderId: "784566599974",
    appId: "1:784566599974:web:42ee505dc49b5bdd4201e7",
    measurementId: "G-HC94N4PDHF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
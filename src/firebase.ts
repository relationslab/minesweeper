import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "minesweeeeeper.firebaseapp.com",
  databaseURL: "https://minesweeeeeper.firebaseio.com",
  projectId: "minesweeeeeper",
  storageBucket: "minesweeeeeper.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID,
};

firebase.initializeApp(config);
firebase.analytics();

export default firebase;

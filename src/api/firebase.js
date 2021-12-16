import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDwJAgSD43PZCqzTHu5IcBd8DMSLjOfZQM",
  authDomain: "gbreactchat.firebaseapp.com",
  databaseURL:
    "https://gbreactchat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gbreactchat",
  storageBucket: "gbreactchat.appspot.com",
  messagingSenderId: "426262825045",
  appId: "1:426262825045:web:9a396239637ac767b72cdc",
  measurementId: "G-CF6D6BFXSB",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

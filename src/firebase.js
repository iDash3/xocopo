import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDTPfeVJgQwMfJdl_AQNvIz-o8aW95tAcY",
  authDomain: "xocopo-479d1.firebaseapp.com",
  projectId: "xocopo-479d1",
  storageBucket: "xocopo-479d1.appspot.com",
  messagingSenderId: "935626966466",
  appId: "1:935626966466:web:5ff6e18466f41f215d025b",
};

const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  db,
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFuRWKKJq6R59BwK3KmHaymq1myFmfsKs",
  authDomain: "practiceapp-5f12b.firebaseapp.com",
  projectId: "practiceapp-5f12b",
  storageBucket: "practiceapp-5f12b.appspot.com",
  messagingSenderId: "126290093041",
  appId: "1:126290093041:web:0483a84f8dd7b736cc9a50",
  measurementId: "G-VGCVBJS7WC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

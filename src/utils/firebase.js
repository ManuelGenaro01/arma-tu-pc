// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHG0lHZHcQdyLFD_2nm4sCeFQc3-j4rpk",
  authDomain: "computaciongenaro-3860e.firebaseapp.com",
  projectId: "computaciongenaro-3860e",
  storageBucket: "computaciongenaro-3860e.appspot.com",
  messagingSenderId: "816416947222",
  appId: "1:816416947222:web:72f33670c0e6ad02874937",
  measurementId: "G-3FDV4SHZKN"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const db= getFirestore(app)

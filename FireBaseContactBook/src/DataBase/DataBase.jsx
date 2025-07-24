// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSG6ZCbkJj3TGM0JNM81cIEFOhkZmk-fw",
  authDomain: "fir-contactbook-5b6fb.firebaseapp.com",
  databaseURL: "https://fir-contactbook-5b6fb-default-rtdb.firebaseio.com",
  projectId: "fir-contactbook-5b6fb",
  storageBucket: "fir-contactbook-5b6fb.firebasestorage.app",
  messagingSenderId: "204382492108",
  appId: "1:204382492108:web:5c70a7889d0fbc4cdb7969",
  measurementId: "G-MW4TNW2MRF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const  db=getFirestore(app);
const analytics = getAnalytics(app);
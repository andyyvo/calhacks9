// Import the functions you need from the SDKs
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDODAwUefYQQ2_TwWxBq1lsYA_bFuHk2V4",
  authDomain: "calhacks9.firebaseapp.com",
  databaseURL: "https://calhacks9-default-rtdb.firebaseio.com",
  projectId: "calhacks9",
  storageBucket: "calhacks9.appspot.com",
  messagingSenderId: "115068392508",
  appId: "1:115068392508:web:cbe46ed14430e463235f39",
  measurementId: "G-822LECKTSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

// if we want to do firebase hosting
// npm install -g firebase-tools
// firebase login 
// firebase init 
// firebase deploy 
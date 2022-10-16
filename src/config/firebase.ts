// Import the functions you need from the SDKs
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuhARGgjKilZbXt6p1Foykpo2_s-N3w6s",
  authDomain: "moodz-3f930.firebaseapp.com",
  projectId: "moodz-3f930",
  storageBucket: "moodz-3f930.appspot.com",
  messagingSenderId: "950962178471",
  appId: "1:950962178471:web:0a6020dc29ac5d6acc0e82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

// if we want to do firebase hosting
// npm install -g firebase-tools
// firebase login 
// firebase init 
// firebase deploy 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh2Ql9XxnuT1zaJ-qMKIka5xWp1_UQKB4",
  authDomain: "syntex-e8062.firebaseapp.com",
  projectId: "syntex-e8062",
  storageBucket: "syntex-e8062.appspot.com",
  messagingSenderId: "799714044327",
  appId: "1:799714044327:web:e13c022c4d6448cbb4ee82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiPPpG79x5dqb3CZwkuAiQ78_VyAPcLeU",
  authDomain: "crowd-funding-3cd40.firebaseapp.com",
  projectId: "crowd-funding-3cd40",
  storageBucket: "crowd-funding-3cd40.firebasestorage.app",
  messagingSenderId: "777508945547",
  appId: "1:777508945547:web:1b6a66e123b8dafb8ade8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
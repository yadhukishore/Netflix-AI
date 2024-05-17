// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcJArG-9XzQjQsNzr9R4LbyWZ7qNle1t4",
  authDomain: "netflixgpt-e8c84.firebaseapp.com",
  projectId: "netflixgpt-e8c84",
  storageBucket: "netflixgpt-e8c84.appspot.com",
  messagingSenderId: "411719786480",
  appId: "1:411719786480:web:6f3c549ad3ed81e0960735",
  measurementId: "G-NCM46QEXB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
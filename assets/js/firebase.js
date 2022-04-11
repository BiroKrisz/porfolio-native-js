// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Ebv5QaI0Z3UqwH27R4HEj2R5ikElZ8M",
  authDomain: "portfolio-e4bfb.firebaseapp.com",
  projectId: "portfolio-e4bfb",
  storageBucket: "portfolio-e4bfb.appspot.com",
  messagingSenderId: "879882867526",
  appId: "1:879882867526:web:0a92e3a254d49780390b47",
  measurementId: "G-G2JWQ6K894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
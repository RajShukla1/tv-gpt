// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi9E2vww4kWVLZzoMH-AQq5TbC-kLoKw0",
  authDomain: "tvgpt-f37c2.firebaseapp.com",
  projectId: "tvgpt-f37c2",
  storageBucket: "tvgpt-f37c2.appspot.com",
  messagingSenderId: "371501024316",
  appId: "1:371501024316:web:61e5db9fec07f0b5402f39",
  measurementId: "G-L18ETGWMKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
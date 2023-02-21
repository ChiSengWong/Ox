// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqImXgGtognW0LS0F2XeEZMyTUP-p-410",
  authDomain: "oxapp-c0fef.firebaseapp.com",
  projectId: "oxapp-c0fef",
  storageBucket: "oxapp-c0fef.appspot.com",
  messagingSenderId: "399949716080",
  appId: "1:399949716080:web:dec74489efdcfb229ff2b5",
  measurementId: "G-YYXB44RV9B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
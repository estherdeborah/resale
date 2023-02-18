// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuRV4JzjzePPVgr8jhkCCqCCmNfvhPGzk",
  authDomain: "resale-landing-page.firebaseapp.com",
  projectId: "resale-landing-page",
  storageBucket: "resale-landing-page.appspot.com",
  messagingSenderId: "416188132397",
  appId: "1:416188132397:web:422f2b7024133b59839ca4",
  measurementId: "G-76842MWB74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
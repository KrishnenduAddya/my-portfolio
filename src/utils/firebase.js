// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrvULMm5sHNgq-XM7Wq-X2TUEiJZ3q2UA",
  authDomain: "krishnendu-addya-dev-portfolio.firebaseapp.com",
  projectId: "krishnendu-addya-dev-portfolio",
  storageBucket: "krishnendu-addya-dev-portfolio.appspot.com",
  messagingSenderId: "894834062902",
  appId: "1:894834062902:web:a06940b1b41e88a39a4a97",
  measurementId: "G-YDC3BZSKK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
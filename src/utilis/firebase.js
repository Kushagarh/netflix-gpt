// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS6w4G2nJiQGgfnxuTLUBtT4s1N9_Xvj4",
  authDomain: "netflix-gpt-20eba.firebaseapp.com",
  projectId: "netflix-gpt-20eba",
  storageBucket: "netflix-gpt-20eba.appspot.com",
  messagingSenderId: "1012442489640",
  appId: "1:1012442489640:web:eb00971c0831043e1ee61d",
  measurementId: "G-02SN6LFRT3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

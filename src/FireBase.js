// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyXkkf9T9kqySMJDS25UKYmDx__Vr8ZaQ",
  authDomain: "magoso-ent-2637c.firebaseapp.com",
  projectId: "magoso-ent-2637c",
  storageBucket: "magoso-ent-2637c.appspot.com",
  messagingSenderId: "518934142049",
  appId: "1:518934142049:web:49265cc8015e4338e91e20",
  measurementId: "G-2XRK7QENEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
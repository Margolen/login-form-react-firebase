// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf9C97uZcBzV1B96gpIRWNHRxs6h7rWNs",
  authDomain: "authentification-form-c8d84.firebaseapp.com",
  projectId: "authentification-form-c8d84",
  storageBucket: "authentification-form-c8d84.appspot.com",
  messagingSenderId: "192585400149",
  appId: "1:192585400149:web:e1bf626a30540cdcd3b9dc",
  measurementId: "G-W5QX0ZCNZT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

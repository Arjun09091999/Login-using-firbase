import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC62vJwgfB0WGBTr95aI-PvfllLH6Si9vA",
  authDomain: "login-page-fabcf.firebaseapp.com",
  projectId: "login-page-fabcf",
  storageBucket: "login-page-fabcf.appspot.com",
  messagingSenderId: "857886289168",
  appId: "1:857886289168:web:bb909b7ffa4a7b903cc995",
  measurementId: "G-HKEWE0KFMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



const auth = getAuth();

export { app, auth };
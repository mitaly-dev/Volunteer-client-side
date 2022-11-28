// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpX7_J4qtGpkke9_6lJdOwfCrHBwjh_DQ",
  authDomain: "volunteer-network-71208.firebaseapp.com",
  projectId: "volunteer-network-71208",
  storageBucket: "volunteer-network-71208.appspot.com",
  messagingSenderId: "74480903933",
  appId: "1:74480903933:web:18d9189dbefa46dec14094"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
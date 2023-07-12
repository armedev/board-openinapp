// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1HsKdY70CtmFqiZk7zPCrGewfEthw1TQ",
  authDomain: "board-ecfe5.firebaseapp.com",
  projectId: "board-ecfe5",
  storageBucket: "board-ecfe5.appspot.com",
  messagingSenderId: "25982333990",
  appId: "1:25982333990:web:7842859e4fa3fc2a17e2e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

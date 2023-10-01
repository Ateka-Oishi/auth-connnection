// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAivm4hpEL0xuvnwrDqm9xb-Y6p6oOqTMM",
  authDomain: "auth-connection-a147c.firebaseapp.com",
  projectId: "auth-connection-a147c",
  storageBucket: "auth-connection-a147c.appspot.com",
  messagingSenderId: "968630587780",
  appId: "1:968630587780:web:2f411bc31ecddf5f118dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

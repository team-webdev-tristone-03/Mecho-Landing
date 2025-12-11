// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// TODO: Replace with your new Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcrfFwfY6NRK7U2_zdjtHBIZgYNuRoVYc",
  authDomain: "mecho-landing.firebaseapp.com",
  projectId: "mecho-landing",
  storageBucket: "mecho-landing.firebasestorage.app",
  messagingSenderId: "909858932918",
  appId: "1:909858932918:web:61ff0161bd39824cd37e17",
  measurementId: "G-KTZP6F41EY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
export default app;





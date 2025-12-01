// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2bxOCjd_7hKUHgREEhcV79KfFY0IRvJk",
  authDomain: "mecho-website-2fcb0.firebaseapp.com",
  projectId: "mecho-website-2fcb0",
  storageBucket: "mecho-website-2fcb0.firebasestorage.app",
  messagingSenderId: "874636027772",
  appId: "1:874636027772:web:7cd2253ae9bf3c4870e6f9",
  measurementId: "G-4CFCZGG85L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;
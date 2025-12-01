// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2bxOCjd_7hKUHgREEhcV79KfFY0IRvJk",
  authDomain: "mecho-website-2fcb0.firebaseapp.com",
  projectId: "mecho-website-2fcb0",
  storageBucket: "mecho-website-2fcb0.firebasestorage.app",
  messagingSenderId: "874636027772",
  appId: "1:874636027772:web:c846d75cc93a08c970e6f9",
  measurementId: "G-74J88ZJJQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
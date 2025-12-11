// Test Firebase configuration
import { auth, db } from './firebaseConfig';

console.log('Firebase Auth:', auth);
console.log('Firebase DB:', db);
console.log('Auth Config:', auth.config);

export const testFirebaseConnection = () => {
  try {
    console.log('Firebase initialized successfully');
    console.log('Project ID:', auth.app.options.projectId);
    console.log('Auth Domain:', auth.app.options.authDomain);
    return true;
  } catch (error) {
    console.error('Firebase configuration error:', error);
    return false;
  }
};
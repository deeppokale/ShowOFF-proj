// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUkoPmTBOt87QCdInhlzbjk_0CsRHw0Ww",
  authDomain: "show-off-bc3fd.firebaseapp.com",
  projectId: "show-off-bc3fd",
  storageBucket: "show-off-bc3fd.firebasestorage.app",
  messagingSenderId: "301416855562",
  appId: "1:301416855562:web:29f468ab884a2bfc17c7f3",
  measurementId: "G-NS64J2YGG4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // Firestore export

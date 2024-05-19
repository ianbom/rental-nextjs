import { getAuth } from 'firebase/auth';
import { initializeApp, getApps, getApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyC_kQvsO5-tT_2o9cJuz4UFoenMBL7ashI",
  authDomain: "rental-d4aff.firebaseapp.com",
  projectId: "rental-d4aff",
  storageBucket: "rental-d4aff.appspot.com",
  messagingSenderId: "596413906000",
  appId: "1:596413906000:web:8526a692ecaf6711092555",
  measurementId: "G-J97NYC4MM1"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };

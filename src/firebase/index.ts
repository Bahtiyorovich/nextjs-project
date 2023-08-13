import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCUZejzjhZsROueEIzrT3UY3KKIVq0_y7k",
  authDomain: "movie-app-e1c08.firebaseapp.com",
  projectId: "movie-app-e1c08",
  storageBucket: "movie-app-e1c08.appspot.com",
  messagingSenderId: "868281867929",
  appId: "1:868281867929:web:7004e1d3559d820667a208"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app)
const auth = getAuth()

export default app;
export {db, auth}

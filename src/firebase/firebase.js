import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA4kT4RUGxyNXFFpGzcIPwjwtpHrjxmsw0",
  authDomain: "final-project-react-dbd86.firebaseapp.com",
  projectId: "final-project-react-dbd86",
  storageBucket: "final-project-react-dbd86.appspot.com",
  messagingSenderId: "67548709807",
  appId: "1:67548709807:web:b8dc580d0a5e089849655a",
  measurementId: "G-YNSCXJ5KM8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const imgDB = getStorage(app);





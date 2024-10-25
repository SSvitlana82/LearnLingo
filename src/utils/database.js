import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6gXdx4Pqn7oUpxn7DgVM8lk86gBlK1kQ",
  authDomain: "sudbinas-37da5.firebaseapp.com",
  databaseURL:
    "https://sudbinas-37da5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sudbinas-37da5",
  storageBucket: "sudbinas-37da5.appspot.com",
  messagingSenderId: "143326335260",
  appId: "1:143326335260:web:7ed1aa2ce6d70e3ed32ad9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default getDatabase(app);

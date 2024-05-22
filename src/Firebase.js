import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZev8DqXhWwNqP6XUQcFP6HByE-sMTQ7I",
  authDomain: "clone-3bbf1.firebaseapp.com",
  projectId: "clone-3bbf1",
  storageBucket: "clone-3bbf1.appspot.com",
  messagingSenderId: "758462770744",
  appId: "1:758462770744:web:28c7d167e82fe1589280cd",
  measurementId: "G-5PTCMSXSB5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

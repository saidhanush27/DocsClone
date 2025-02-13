// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbBTsyhR56ipCccym_W3SOL4Ogy-KDkMw",
  authDomain: "docs-clone-6f93a.firebaseapp.com",
  projectId: "docs-clone-6f93a",
  storageBucket: "docs-clone-6f93a.firebasestorage.app",
  messagingSenderId: "74417524976",
  appId: "1:74417524976:web:49609ed4a096226f337235"
};



const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);





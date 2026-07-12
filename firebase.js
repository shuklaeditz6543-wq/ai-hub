// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAT7jDXx2NB0N0qAXuTMT9QNz30ALvQ4OU",
  authDomain: "ai-hub-af074.firebaseapp.com",
  projectId: "ai-hub-af074",
  storageBucket: "ai-hub-af074.firebasestorage.app",
  messagingSenderId: "127381969332",
  appId: "1:127381969332:web:54d890be1899456721fae1",
  measurementId: "G-01F2BFGP35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export
export {
  auth,
  provider,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged
};
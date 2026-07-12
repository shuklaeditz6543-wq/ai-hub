import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithPopup
} from "./firebase.js";

import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const signupBtn = document.getElementById("signupBtn");
const googleBtn = document.getElementById("googleBtn");

// Email Signup
signupBtn.addEventListener("click", async () => {
  if (!name.value || !email.value || !password.value) {
    alert("Please fill all fields!");
    return;
  }
  
  try {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    
    alert("🎉 Account Created Successfully!");
    window.location.href = "index.html";
    
  } catch (error) {
    alert(error.message);
  }
});

// Google Signup
googleBtn.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, provider);
    
    alert("✅ Google Login Successful!");
    window.location.href = "index.html";
    
  } catch (error) {
    alert(error.message);
  }
});
import {
  auth,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup
} from "./firebase.js";

// Email Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("✅ Login Successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Google Login
document.getElementById("googleBtn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      alert("✅ Google Login Successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
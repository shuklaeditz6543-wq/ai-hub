import { auth, signOut, onAuthStateChanged } from "./firebase.js";
import { db } from "./firebase.js";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
// Check login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    document.getElementById("userName").textContent =
      "Hi, " + (user.displayName || user.email.split("@")[0]) + " 👋";
      if (user && user.email === "shuklarudramani7@gmail.com") {
    document.getElementById("adminBtn").style.display = "inline-block";
}
  }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  signOut(auth).then(() => {
    alert("👋 Logout Successful!");
    window.location.href = "login.html";
  });
});
// Visitor Counter
async function updateVisitorCount() {
  const ref = doc(db, "website", "visitors");
  
  const snap = await getDoc(ref);
  
  if (!snap.exists()) {
    await setDoc(ref, { count: 1 });
    document.getElementById("visitorCount").textContent = 1;
  } else {
    await updateDoc(ref, {
      count: increment(1)
    });
    
    const newSnap = await getDoc(ref);
    document.getElementById("visitorCount").textContent = newSnap.data().count;
  }
}

updateVisitorCount();
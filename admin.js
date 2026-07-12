import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const toolName = document.getElementById("toolName");
const toolCategory = document.getElementById("toolCategory");
const toolRating = document.getElementById("toolRating");
const toolLink = document.getElementById("toolLink");
const toolDesc = document.getElementById("toolDesc");

const addToolBtn = document.getElementById("addToolBtn");

// Add Tool
addToolBtn.addEventListener("click", async () => {
  
  try {
    
    await addDoc(collection(db, "tools"), {
      
      name: toolName.value,
      category: toolCategory.value,
      rating: toolRating.value,
      link: toolLink.value,
      description: toolDesc.value
      
    });
    
    alert("✅ Tool Added Successfully!");
    
    toolName.value = "";
    toolCategory.value = "";
    toolRating.value = "";
    toolLink.value = "";
    toolDesc.value = "";
    
  } catch (error) {
    
    alert(error.message);
    
  }
  
});
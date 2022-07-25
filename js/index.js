// Import functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidlQBxSNmu562K-pmgzQabDAs6CAucV4",
  authDomain: "kachow-67bdb.firebaseapp.com",
  databaseURL:
    "https://kachow-67bdb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kachow-67bdb",
  storageBucket: "kachow-67bdb.appspot.com",
  messagingSenderId: "544603719345",
  appId: "1:544603719345:web:0035b26a386e36b2774490",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login Handler
const email = document.getElementById("loginEmail");
const pass = document.getElementById("loginPassword");
const form = document.getElementById("loginForm");

form.addEventListener("submit", function () {
  signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      const q = query(
        collection(db, "accounts"),
        where("email", "==", email.value)
      );
      getDocs(q)
        .then((querySnapshot) => {
          const res = querySnapshot.docs[0];
          sessionStorage.setItem("userId", res.id);
          alert("Login successful! Redirecting to portal...");
          window.location.replace("main.html");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Server error! Try again.");
          console.log(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      alert("Invalid account credentials!");
    });
});

// Forget password handler
const forgetForm = document.getElementById("forgetPassForm");
forgetForm.addEventListener("submit", function () {
  const forgetEmail = document.getElementById("forgetPassEmail").value;
  sendPasswordResetEmail(auth, forgetEmail)
    .then(() => {
      alert(
        "Password reset link has been sent to your email. Please check your email (especially your spam folder!) for further instructions."
      );
      window.location.replace("index.html");
    })
    .catch((error) => {
      alert(
        "User not found in our database. Please sign up for an account instead."
      );
    });
});

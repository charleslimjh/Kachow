// Import functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  collectionGroup,
  query,
  where,
  getDocs,
  addDoc,
  collection,
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
const auth = getAuth();
const db = getFirestore(app);

// Ensure user is logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("body").style.display = "block";
    getInfo(user);
  } else {
    window.location.replace("/index.html");
  }
});

// Signout logic
let signOutLink = document.getElementById("signOut");
signOutLink.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      sessionStorage.removeItem("userId");
      window.location.replace("index.html");
    })
    .catch((error) => {
      // An error happened.
      console.log("Error occurred.");
    });
});

function getInfo(user) {
  const message = document.getElementById("confirmationMessage");
  const booking = sessionStorage.getItem("booking");
  const date = sessionStorage.getItem("date");
  const time = sessionStorage.getItem("time");
  message.innerText =
    "You have successfully booked " +
    booking +
    " at " +
    date +
    ", " +
    time +
    ".";
  sessionStorage.removeItem('booking');
  sessionStorage.removeItem('category');
  sessionStorage.removeItem('time');
  sessionStorage.removeItem('date');
}

// Import functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  updateEmail,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
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

// Display account info
function getInfo(user) {
  const account = sessionStorage.getItem("userId");
  const docRef = doc(db, "accounts", account);
  getDoc(docRef)
    .then((docSnap) => {
      const name = document.getElementById("input-username");
      const email = document.getElementById("input-email");
      const contact = document.getElementById("input-contact");
      const course = document.getElementById("input-course");
      const address = document.getElementById("input-address");
      const postal = document.getElementById("input-postal-code");

      name.value = docSnap.get("lastName") + ", " + docSnap.get("firstName");
      email.value = docSnap.get("email");
      contact.value = docSnap.get("phone");
      course.value = docSnap.get("course");
      address.value = docSnap.get("address");
      postal.value = docSnap.get("postal");
    })
    .catch(() => {
      console.log("something went wrong.");
    });
}

// update user information
function updateUser() {
  const account = sessionStorage.getItem("userId");

  const email = document.getElementById("input-email");
  const contact = document.getElementById("input-contact");
  const address = document.getElementById("input-address");
  const postal = document.getElementById("input-postal-code");

  // Update Authentication record
  updateEmail(auth.currentUser, email.value)
    .then(() => {
      // Update Firestore record
      setDoc(
        doc(db, "accounts", account),
        {
          phone: contact.value,
          address: address.value,
          postal: postal.value,
          email: email.value,
        },
        { merge: true }
      )
        .then(() => {
          console.log("Update success! Redirecting...");
          window.location.replace("account.html");
        })
        .catch((error) => {
          alert("Database server error, please try again later.");
          console.log(error);
        });
    })
    .catch((error) => {
      alert("Authentication server error, please try again later.");
      console.log(error);
    });
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", updateUser);

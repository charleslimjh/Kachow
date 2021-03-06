import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
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

// Initialize Firebase and Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById('registerForm');
form.addEventListener('submit', createUser);

// Add a new user
function createUser() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("birthdayDate").value;
  const email = document.getElementById("emailAddress").value;
  const phone = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;
  const postalCode = document.getElementById("postalCode").value;
  const pass = document.getElementById("password").value;

  var gender = "others";
  for (const radioButton of document.querySelectorAll('input[type="radio"]')) {
    if (radioButton.checked) {
      gender = radioButton.value;
      break;
    }
  }

  const select = document.getElementById("course");
  const course = select.options[select.selectedIndex].value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in, update profile name
      const user = userCredential.user;

      // add account details to Firestore
      setDoc(doc(db, "accounts", email), {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender,
        phone: phone,
        address: address,
        postal: postalCode,
        course: course,
      })
        .then(() => {
          // Login user, redirect to main page
          window.location.replace("main.html");
        })
        .catch((error) => {
          alert("Server error, try again!")
          console.log(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode, errorMessage);
    });
}

// login handlers
const email = document.getElementById("loginEmail");
const pass = document.getElementById("loginPassword");
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function () {
  signInWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.replace("main.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Invalid account credentials! Try again.")
      console.log(error);
    });
});
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
  orderBy,
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
      // Display name
      const name = document.getElementById("userName");
      name.innerText = " " + docSnap.get("firstName") + " ";
    })
    .catch(() => {
      console.log("something went wrong.");
    });

  // TODO: modify query to only retrieve upcoming bookings
  const bookings = query(
    collectionGroup(db, "records"),
    where("user", "==", account),
    orderBy("datetime")
  );

  var noBookings = 0;
  const bookingNo = document.getElementById("bookingNo");
  const table = document.getElementById("bookings");

  getDocs(bookings)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var date = doc.get("datetime").split(", ").join(" ");
        if (Date.parse(date) > Date.now()) {
          var rowCount = table.rows.length;
          var row = table.insertRow(rowCount);

          var cell;
          cell = row.insertCell(0);
          cell.innerHTML = "<td>" + doc.id + "</td>";

          cell = row.insertCell(1);
          cell.innerHTML = "<td>" + doc.get("bookingDesc") + "</td>";

          cell = row.insertCell(2);
          cell.innerHTML = "<td>" + doc.get("datetime") + "</td>";

          noBookings++;
          bookingNo.innerHTML = "You have " + noBookings + " bookings.";
        }
      });
    })
    .catch((error) => {
      alert("Error with retrieving bookings.");
      console.log(error);
    });
}

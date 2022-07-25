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
  collection,
  setDoc,
  updateDoc,
  increment,
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
  } else {
    window.location.replace("/index.html");
  }
});

// Signout logic
let signOutLink = document.getElementById("signOut");
signOutLink.addEventListener("click", () => {
  console.log("logging out");
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.replace("index.html");
    })
    .catch((error) => {
      // An error happened.
      console.log("Error occurred.");
    });
});

// get data from booking page
const category = sessionStorage.getItem("category");
const booking = sessionStorage.getItem("booking");
document.getElementById("category").value = category;
document.getElementById("bookingType").value = booking;

// DateTimePicker JS
new tempusDominus.TempusDominus(document.getElementById("datetimepicker4"), {
  display: {
    viewMode: "calendar",
    components: {
      decades: true,
      year: true,
      month: true,
      date: true,
      hours: false,
      minutes: false,
      seconds: false,
    },
  },
});

// Register booking in firebase
const form = document.getElementById("form");
form.addEventListener("submit", addData);

function addData() {
  let category = document.getElementById("category").value;
  switch (category) {
    case "Practical":
      category = "practicals";
      break;
    case "Simulator":
      category = "simulators";
      break;
    case "Theory":
      category = "theory";
      break;
    default:
      break;
  }

  const booking = document.getElementById("bookingType").value;
  const date = document.getElementById("datetimepicker4Input").value;
  const time = document.getElementById("time").value;

  const bookingRef = doc(db, "bookings", category);
  updateDoc(bookingRef, {
    bookingNo: increment(1),
  })
    .then(() => {
      console.log("incremented");
      getDoc(bookingRef)
        .then((docSnap) => {
          console.log("retrieved");
          const recordsRef = doc(
            db,
            "bookings/" + category + "/records/" + docSnap.get("bookingNo")
          );
          setDoc(recordsRef, {
            bookingDesc: booking,
            user: auth.currentUser.email,
            datetime: date + " " + time,
          }).then(() => {
            sessionStorage.setItem("date", date);
            sessionStorage.setItem("time", time);
            window.location.replace("confirmation.html");
          }).catch((error) => {
            alert("error");
            console.log(error);
          });
        })
        .catch((error) => {
          alert("unable to retrieve updated booking No.");
          console.log(error);
        });
    })
    .catch((error) => {
      alert("unable to increment booking No.");
      console.log(error);
    });
}

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
    if (sessionStorage.getItem("category") == null) {
      window.location.replace("/booking.html");
    }
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
      hours: true,
      minutes: true,
      seconds: false,
    },
  },
  restrictions: {
    enabledHours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    minDate: new tempusDominus.DateTime(),
  },
  stepping: 30,
});

const f = new Intl.DateTimeFormat("en-ZA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  hour12: false,
  minute: "2-digit",
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
  const date = new tempusDominus.TempusDominus(
    document.getElementById("datetimepicker4Input")
  );

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
            user: sessionStorage.getItem("userId"),
            datetime: f.format(date.viewDate),
          })
            .then(() => {
              sessionStorage.setItem("date", f.format(date.viewDate));
              window.location.replace("confirmation.html");
            })
            .catch((error) => {
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

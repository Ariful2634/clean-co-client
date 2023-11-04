// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjm_vvnm5uY1DBym7w2RPn2yYTIilwDJ0",
  authDomain: "coffee-store-cfb57.firebaseapp.com",
  projectId: "coffee-store-cfb57",
  storageBucket: "coffee-store-cfb57.appspot.com",
  messagingSenderId: "1001007523583",
  appId: "1:1001007523583:web:5b026814a11875a58f4eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
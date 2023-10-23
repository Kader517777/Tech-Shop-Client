// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBTXTiR1MZEjH77QI5ZxW09aRXimDXVyXQ",
    authDomain: "tech-shop-691b5.firebaseapp.com",
    projectId: "tech-shop-691b5",
    storageBucket: "tech-shop-691b5.appspot.com",
    messagingSenderId: "527334810484",
    appId: "1:527334810484:web:327d3280ab0450aac34221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
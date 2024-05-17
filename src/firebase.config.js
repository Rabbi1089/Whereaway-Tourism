// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChtzZgIYCYOZO07RjZLx1VZ4wAaM4N9VU",
  authDomain: "whereaway-tourism.firebaseapp.com",
  projectId: "whereaway-tourism",
  storageBucket: "whereaway-tourism.appspot.com",
  messagingSenderId: "312825418895",
  appId: "1:312825418895:web:d1b47fe0e963b597d5ccfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
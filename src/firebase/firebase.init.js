// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5dkpZ9XJhF-QhQAacr7UDTe_gxviI4sk",
  authDomain: "coffee-shop-app-b6c5e.firebaseapp.com",
  projectId: "coffee-shop-app-b6c5e",
  storageBucket: "coffee-shop-app-b6c5e.firebasestorage.app",
  messagingSenderId: "201507115859",
  appId: "1:201507115859:web:aa742928e9e93e6c9807a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);
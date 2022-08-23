// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRG8uxHwc60aXWrg1W7QlFWCGW5CkWHfA",
  authDomain: "animeapp-2a6bd.firebaseapp.com",
  projectId: "animeapp-2a6bd",
  storageBucket: "animeapp-2a6bd.appspot.com",
  messagingSenderId: "1095663886100",
  appId: "1:1095663886100:web:395b98e4a9ba42e254ac01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
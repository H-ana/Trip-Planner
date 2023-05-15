// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuQvzrAi0j9XUOk8xuq2h070Dkjy9tWWA",
  authDomain: "tripplanner-16e89.firebaseapp.com",
  projectId: "tripplanner-16e89",
  storageBucket: "tripplanner-16e89.appspot.com",
  messagingSenderId: "629172319853",
  appId: "1:629172319853:web:594a043131aad20950b164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
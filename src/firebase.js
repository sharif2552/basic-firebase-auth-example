import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxG3qA8i6OqywZ8-uKspdYzoj5L-xbpXY",
  authDomain: "react-auth-2-f31ad.firebaseapp.com",
  projectId: "react-auth-2-f31ad",
  storageBucket: "react-auth-2-f31ad.appspot.com",
  messagingSenderId: "982947886949",
  appId: "1:982947886949:web:eaff83253e1fa182d4d38c",
  measurementId: "G-YKRFLR5W0F"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }; 

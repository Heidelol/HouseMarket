// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDi9OTyrozaZTHoRz7ELYgjZn_8V6yQePs",
  authDomain: "house-marketplace-app-d61d9.firebaseapp.com",
  projectId: "house-marketplace-app-d61d9",
  storageBucket: "house-marketplace-app-d61d9.appspot.com",
  messagingSenderId: "315580633536",
  appId: "1:315580633536:web:a01a0083b53df7a3e63825"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0jKpR_dpAsb6Q5ZG_SLlWjLlrMGfDrr8",
  authDomain: "e-commerce-gabutti.firebaseapp.com",
  projectId: "e-commerce-gabutti",
  storageBucket: "e-commerce-gabutti.appspot.com",
  messagingSenderId: "779152198886",
  appId: "1:779152198886:web:21feebffb08f113d23bf27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
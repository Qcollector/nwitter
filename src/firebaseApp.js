import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfS-es22RGpeZ0qh_0CJctD7ngMdulalw",
  authDomain: "nwitter-bcbef.firebaseapp.com",
  projectId: "nwitter-bcbef",
  storageBucket: "nwitter-bcbef.appspot.com",
  messagingSenderId: "152421200789",
  appId: "1:152421200789:web:20ae9d401a7f0ea4653c9c",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
export const authService = getAuth();
export const dbService = getFirestore();

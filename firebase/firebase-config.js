import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjPtnK2rILsqmgcYyMnHpu672azLkDC0s",
  authDomain: "sellingapp-60afa.firebaseapp.com",
  projectId: "sellingapp-60afa",
  storageBucket: "sellingapp-60afa.appspot.com",
  messagingSenderId: "735094716214",
  appId: "1:735094716214:web:662d96850873a8aeaa6597",
  measurementId: "G-YF06HEWL89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
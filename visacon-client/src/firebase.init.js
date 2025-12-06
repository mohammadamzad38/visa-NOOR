import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFEXInyQnmaDT8x3T5Tdfnk480D6JWeWA",
  authDomain: "visacon-e8297.firebaseapp.com",
  projectId: "visacon-e8297",
  storageBucket: "visacon-e8297.firebasestorage.app",
  messagingSenderId: "6474020906",
  appId: "1:6474020906:web:b2e1f31ecb70e2732d2b53",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

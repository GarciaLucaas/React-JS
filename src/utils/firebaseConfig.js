
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBkUlrWI60tz9T_ZsTuawbXqOT1JTpL5c",
  authDomain: "coder-lucas.firebaseapp.com",
  projectId: "coder-lucas",
  storageBucket: "coder-lucas.appspot.com",
  messagingSenderId: "986072821113",
  appId: "1:986072821113:web:a9b910db85ff19335513a8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
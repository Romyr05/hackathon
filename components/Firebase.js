
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCFCXVlnJ9gz3sd8hW7IL7kPWp8CN53Tzs",
  authDomain: "hackathon-35971.firebaseapp.com",
  projectId: "hackathon-35971",
  storageBucket: "hackathon-35971.appspot.com",
  messagingSenderId: "754049144588",
  appId: "1:754049144588:web:c7085fbcfccfcf522edb29",
  measurementId: "G-4NLR1FJQGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFireStore(app);
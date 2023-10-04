// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyAjAw7QdtVaRx14zzvKeLcq71caFeYefms",
  authDomain: "disney-plus-clone-3f60c.firebaseapp.com",
  projectId: "disney-plus-clone-3f60c",
  storageBucket: "disney-plus-clone-3f60c.appspot.com",
  messagingSenderId: "24153369287",
  appId: "1:24153369287:web:db925fdf298441d830ace2",
  measurementId: "G-CD39670L1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
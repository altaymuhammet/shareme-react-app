// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOBmqf21bPOC75nMrDTOwQZweNbnktUAU",
  authDomain: "share-me-app-dcd7b.firebaseapp.com",
  projectId: "share-me-app-dcd7b",
  storageBucket: "share-me-app-dcd7b.appspot.com",
  messagingSenderId: "345537370022",
  appId: "1:345537370022:web:b2e2bb14e8d8759d8a6167",
  measurementId: "G-44CV8D15DF"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export {
    provider,
    auth,
    signInWithPopup,
    GoogleAuthProvider
}

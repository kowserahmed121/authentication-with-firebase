// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtYGjCVGepk2w5F94U4r-yl7_zQR_JA_A",
  authDomain: "context-api-auth-eed4f.firebaseapp.com",
  projectId: "context-api-auth-eed4f",
  storageBucket: "context-api-auth-eed4f.firebasestorage.app",
  messagingSenderId: "446905977840",
  appId: "1:446905977840:web:9016d874299504be522b35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

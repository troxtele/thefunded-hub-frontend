// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtQtD9omLRc4TMyvY4j4UPehLEnT7xCzk",
  authDomain: "the-funded-hub-auth.firebaseapp.com",
  projectId: "the-funded-hub-auth",
  storageBucket: "the-funded-hub-auth.appspot.com",
  messagingSenderId: "760510534237",
  appId: "1:760510534237:web:5e5f9752e18b6fcfb733b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
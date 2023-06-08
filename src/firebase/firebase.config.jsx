
import { initializeApp } from "firebase/app";
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
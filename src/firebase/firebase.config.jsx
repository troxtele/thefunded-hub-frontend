// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCAOXledzWcsxG8zbduKABUoB1dTc-MkA8",
authDomain: "the-funded-hub.firebaseapp.com",
projectId: "the-funded-hub",
storageBucket: "the-funded-hub.appspot.com",
messagingSenderId: "43349584518",
appId: "1:43349584518:web:b3c332c6aa6e1eb29f3f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
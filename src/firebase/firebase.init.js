// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYZYi9zFFd4boUNvYpg0lvGGw8IVfCeg4",
  authDomain: "dragon-news-auth-project-80be9.firebaseapp.com",
  projectId: "dragon-news-auth-project-80be9",
  storageBucket: "dragon-news-auth-project-80be9.firebasestorage.app",
  messagingSenderId: "51590547611",
  appId: "1:51590547611:web:e244d27df7b81f4aaf1e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
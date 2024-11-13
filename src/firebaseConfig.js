// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByi856_SHpp-4YgD-XC1gZ4Q5g8OqwsVs",
  authDomain: "aprende-1a905.firebaseapp.com",
  projectId: "aprende-1a905",
  storageBucket: "aprende-1a905.firebasestorage.app",
  messagingSenderId: "340802008885",
  appId: "1:340802008885:web:2e294ffc791757f547fe7c",
  measurementId: "G-B0B2M373B7"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
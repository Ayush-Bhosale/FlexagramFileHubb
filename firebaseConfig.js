// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:  process.env.FIREBASE_API_KEY,
  authDomain: "flexagram-7897c.firebaseapp.com",
  projectId: "flexagram-7897c",
  storageBucket: "flexagram-7897c.appspot.com",
  messagingSenderId: "462702494329",
  appId: "1:462702494329:web:777bce6ed196091eddcaa8",
  measurementId: "G-FZYQW7VNGJ"
};
// Initialize Firebase



const app = initializeApp(firebaseConfig);
export default app;
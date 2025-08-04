// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr3ZJLpuVPLevDnbM5teg2Eo3htwFNy8k",
  authDomain: "Matchup-b4c8b.firebaseapp.com",
  projectId: "Matchup-b4c8b",
  storageBucket: "Matchup-b4c8b.appspot.com",
  messagingSenderId: "304605017993",
  appId: "1:304605017993:web:d425b78f148e4349b21358",
  measurementId: "G-J6VDYEGF48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGDaBf21o9GPVDzhqn-JUReMsvQU1oK2w",
  authDomain: "genius-car-recap-2fd33.firebaseapp.com",
  projectId: "genius-car-recap-2fd33",
  storageBucket: "genius-car-recap-2fd33.appspot.com",
  messagingSenderId: "705742434921",
  appId: "1:705742434921:web:8414ffbd9af284b63d68f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
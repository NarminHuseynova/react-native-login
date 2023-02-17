// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";
// import dotenv from "dotenv";

// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV4qxltfT28DrxDTXukeQIY1uLwKyJKPc",
  authDomain: "fir-auth-3370c.firebaseapp.com",
  projectId: "fir-auth-3370c",
  storageBucket: "fir-auth-3370c.appspot.com",
  messagingSenderId: "1027958858019",
  appId: "1:1027958858019:web:c0cc48a17de4bc95e46c96"
};

// Initialize Firebase
const app =
  firebase.apps.length > 0
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export {auth};

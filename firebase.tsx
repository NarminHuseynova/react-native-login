// Import the functions you need from the SDKs you need
import firebase from "firebase";
import "firebase/auth";

// dotenv.config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWPCHEsw2g8Ra_RWwt0wQcctPZ0fT-fww",
  authDomain: "react-native-login-35cee.firebaseapp.com",
  projectId: "react-native-login-35cee",
  storageBucket: "react-native-login-35cee.appspot.com",
  messagingSenderId: "275131751457",
  appId: "1:275131751457:web:571b9bba26faf48d1d9760",
  measurementId: "G-XJNTJBBVFC",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
const db = firebase.firestore();

export { auth };
export { db };

// import firebase from "@react-native-firebase/app";
// import "@react-native-firebase/firestore";
// import "@react-native-firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAWPCHEsw2g8Ra_RWwt0wQcctPZ0fT-fww",
//   authDomain: "react-native-login-35cee.firebaseapp.com",
//   projectId: "react-native-login-35cee",
//   storageBucket: "react-native-login-35cee.appspot.com",
//   messagingSenderId: "275131751457",
//   appId: "1:275131751457:web:571b9bba26faf48d1d9760",
//   measurementId: "G-XJNTJBBVFC",
// };

// let app;

// if (firebase.apps.length > 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// export const db = firebase.firestore();
// export const auth = firebase.auth();

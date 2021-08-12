import firebase from "firebase/app";
import "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

// console.log(process.env.REACT_APP_FIREBASE_API_KEY)



var firebaseConfig = {
  apiKey: "AIzaSyDrqB5tVBLOTiUPY-u68SUcJsfnhzdhsOQ",
  authDomain: "auth-development-a4808.firebaseapp.com",
  projectId: "auth-development-a4808",
  storageBucket: "auth-development-a4808.appspot.com",
  messagingSenderId: "1047572114830",
  appId: "1:1047572114830:web:cbdef14ae6577c060f08df"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBDo8cCGczYMJRBCg9h30GeSLmXn-nZ-Eg",
  authDomain: "clone-854fe.firebaseapp.com",
  projectId: "clone-854fe",
  storageBucket: "clone-854fe.appspot.com",
  messagingSenderId: "13063879645",
  appId: "1:13063879645:web:dd6b34e6001d00c5e51434",
  measurementId: "G-NVB116T54Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
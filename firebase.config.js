import { initializeApp } from "firebase/app"
import { getAuth, PhoneAuthProvider, RecaptchaVerifier } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5Cyie3kBaYkHWlIyas1UOXigA5JgiMPg",
  authDomain: 'gomobil-de87b.firebaseapp.com',
  databaseURL: 'https://gomobil-de87b.firebaseio.com',
  projectId: 'gomobil-de87b',
  storageBucket: 'gomobil-de87b.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'com.gomobil',
  measurementId: 'G-measurement-id',
};

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbxancDXs_0TpcvHaS3NEEJgVpA9ep0oo",
  authDomain: "gomobil-de87b.firebaseapp.com",
  projectId: "gomobil-de87b",
  storageBucket: "gomobil-de87b.appspot.com",
  messagingSenderId: "397349079751",
  appId: "1:397349079751:web:925c025afed87465e78ce2",
  measurementId: "G-1K1R2570VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

*/

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();
export { PhoneAuthProvider, RecaptchaVerifier, auth, firestore, app };



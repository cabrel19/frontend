import { initializeApp } from "firebase/app"
 import { getAuth,PhoneAuthProvider,RecaptchaVerifier, signInWithCredential } from "firebase/auth"
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

const app = initializeApp(firebaseConfig);
 const auth = getAuth();
 const firestore = getFirestore();
export {PhoneAuthProvider, signInWithCredential, RecaptchaVerifier,auth,firestore,app};


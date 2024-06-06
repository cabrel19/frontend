import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFiretore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "gomobil-de87b.firebaseapp.com",
  databaseURL: "https://gomobil-de87b.firebaseio.com",
  projectId: "gomobil-de87b",
  storageBucket: "gomobil-de87b.appspot.com",
  messagingSenderId: "sender-id",
  appId: "com.gomobil",
  measurementId: "G-measument-id",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = getFiretore(firebase);

import { initializeApp } from "firebase/app"
import { getAuth, PhoneAuthProvider,signInWithCredential,signInWithPhoneNumber} from "firebase/auth"
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCbYG6USIOaODb9OrITexz8L4FbqvAkq48",
  authDomain: "gomobil-6880e.firebaseapp.com",
  projectId: "gomobil-6880e",
  storageBucket: "gomobil-6880e.appspot.com",
  messagingSenderId: "774431344622",
  appId: "1:774431344622:web:c48da9f29e39db5e61f0ff",
  measurementId: "G-W9Z33155XJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { PhoneAuthProvider, auth, firestore, app, signInWithCredential, signInWithPhoneNumber };


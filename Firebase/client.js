import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { OAuthProvider } from "firebase/auth";

const PROVIDERG = new GoogleAuthProvider('google.com');
const PROVIDERM = new OAuthProvider('microsoft.com');

const firebaseConfig = {
    apiKey: "AIzaSyCT0oTCfnMRKvhFjJiynDRZ4QiBC1BWA4A",
    authDomain: "loginweb-e379e.firebaseapp.com",
    projectId: "loginweb-e379e",
    storageBucket: "loginweb-e379e.firebasestorage.app",
    messagingSenderId: "876038280292",
    appId: "1:876038280292:web:6bf7d42c502fdcbeca7b71",
    measurementId: "G-GHS1C753CX"
};

const app = initializeApp(firebaseConfig);

export function loginGoogle() {
    const auth = getAuth(app);
    signInWithPopup(auth, PROVIDERG)
        .then((result) => { console.log(result.result) })
        .catch((error) => { console.log(error.message) })
}

export function loginMicrosoft() {
    const auth = getAuth(app);
    signInWithPopup(auth, PROVIDERM)
        .then((result) => { console.log(result.result) })
        .catch((error) => { console.log(error.message) })
}



console.log('Firebase', app.name);
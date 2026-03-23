import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { OAuthProvider } from "firebase/auth";

const PROVIDERG = new GoogleAuthProvider('google.com');
const PROVIDERM = new OAuthProvider('microsoft.com');

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase initialized");

// UI Interactions
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Login attempt:", { email, password });
    alert("¡Diseño Premium cargado! Ahora puedes configurar tus credenciales de Firebase en index.js");
  });

  // Add some subtle parallax or hover effects if needed
});

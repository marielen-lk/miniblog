// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDrjoOgLKfvy4ufjsevAQnR-e5PBj98nY4",
    authDomain: "miniblogreact-5b761.firebaseapp.com",
    projectId: "miniblogreact-5b761",
    storageBucket: "miniblogreact-5b761.appspot.com",
    messagingSenderId: "467276712707",
    appId: "1:467276712707:web:1032b369f2a7b14cefb736",
    measurementId: "G-KX6MTFKTWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//Banco de dados do Firebase
const db = getFirestore (app)
export{db};
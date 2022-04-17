// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore  } from 'firebase/firestore'
import {getStorage  } from 'firebase/storage'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE3Y6vWX2KnHnmZT2lsMfnr5zvHy7nNq4",
  authDomain: "zeesh-ecd95.firebaseapp.com",
  projectId: "zeesh-ecd95",
  storageBucket: "zeesh-ecd95.appspot.com",
  messagingSenderId: "894976888939",
  appId: "1:894976888939:web:2bd30c797432ff56d9612e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {db , app , storage};
// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBt9dDMaiKiG1Lou1LtCaePfmZ3WwG82D4",
    authDomain: "crud-08-07-20-26.firebaseapp.com",
    databaseURL: "https://crud-08-07-20-26-default-rtdb.firebaseio.com",
    projectId: "crud-08-07-20-26",
    storageBucket: "crud-08-07-20-26.firebasestorage.app",
    messagingSenderId: "479524962921",
    appId: "1:479524962921:web:5c4038e8a3a27b65e6d8f8",
    measurementId: "G-LHQGHP5SX2"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
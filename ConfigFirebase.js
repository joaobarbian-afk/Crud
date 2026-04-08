import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCb1TdQPjMZgZmNckLNJ4-RywuQyh4hqV4",
    authDomain: "calculadora-simles.firebaseapp.com",
    databaseURL: "https://calculadora-simles-default-rtdb.firebaseio.com",
    projectId: "calculadora-simles",
    storageBucket: "calculadora-simles.firebasestorage.app",
    messagingSenderId: "174963090188",
    appId: "1:174963090188:web:67f4949c1d397ffa1c1f29",
    measurementId: "G-D0XT1Z4YTW"
};

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
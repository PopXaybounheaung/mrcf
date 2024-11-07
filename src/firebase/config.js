// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDmnBuasfRCu6XyJwjUVJpSv7wY_fb9b2g",
    authDomain: "water-monitoring-dashboard.firebaseapp.com",
    databaseURL: "https://water-monitoring-dashboard-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "water-monitoring-dashboard",
    storageBucket: "water-monitoring-dashboard.firebasestorage.app",
    messagingSenderId: "160841634476",
    appId: "1:160841634476:web:d00b433dc62ffea5290509",
    measurementId: "G-WBF7ZCQM9J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
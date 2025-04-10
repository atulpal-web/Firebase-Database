import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAb_wJ9bKz3YwHnb4BfAC2x9OV_qIUr2Os",
  authDomain: "fir-real-time-6b3cf.firebaseapp.com",
  databaseURL: "https://fir-real-time-6b3cf-default-rtdb.firebaseio.com",
  projectId: "fir-real-time-6b3cf",
  storageBucket: "fir-real-time-6b3cf.firebasestorage.app",
  messagingSenderId: "672139696133",
  appId: "1:672139696133:web:ee8e7ed7349a32be58646c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default db
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCKn9ISD1LD-qgimgLMRDYp_ZvZ0WJPnzk",
  authDomain: "chat-forum-ed.firebaseapp.com",
  databaseURL:
    "https://chat-forum-ed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-forum-ed",
  storageBucket: "chat-forum-ed.appspot.com",
  messagingSenderId: "474960019860",
  appId: "1:474960019860:web:e21f1ef489196cacd54f81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

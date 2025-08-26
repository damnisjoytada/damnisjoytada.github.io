// firebase-config.js

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBpelNGMF8mFaIubT5md12CsAXF5WCrVxg",
  authDomain: "plsworknobugs.firebaseapp.com",
  databaseURL: "https://plsworknobugs-default-rtdb.firebaseio.com",
  projectId: "plsworknobugs",
  storageBucket: "plsworknobugs.firebasestorage.app",
  messagingSenderId: "958703698616",
  appId: "1:958703698616:web:1a3809d7d0c71867422a4d",
  measurementId: "G-02TWH3QT2R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
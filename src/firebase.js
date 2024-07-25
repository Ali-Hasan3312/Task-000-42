// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbfcD7TF4yc9UZzFjwxii51_a9xjwiLvs",
  authDomain: "task-000-42.firebaseapp.com",
  projectId: "task-000-42",
  storageBucket: "task-000-42.appspot.com",
  messagingSenderId: "41864520572",
  appId: "1:41864520572:web:b9f29157bc049d8d3c3af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;
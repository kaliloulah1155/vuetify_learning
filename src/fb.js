// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW91G8epgOIG0pZRmOJ3WJEnZ4YqrLir4",
  authDomain: "todo-ninja-7f5b1.firebaseapp.com",
  databaseURL: "https://todo-ninja-7f5b1-default-rtdb.firebaseio.com",
  projectId: "todo-ninja-7f5b1",
  storageBucket: "todo-ninja-7f5b1.appspot.com",
  messagingSenderId: "41048566245",
  appId: "1:41048566245:web:21204f15f36d506203e70c",
  measurementId: "G-48Y3X2L5S3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app)

export default db 
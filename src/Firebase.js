import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyABt18832ENx8TnC_DM6JZ9yTC4f98mLN8",
  authDomain: "pet-project-fe.firebaseapp.com",
  projectId: "pet-project-fe",
  storageBucket: "pet-project-fe.appspot.com",
  messagingSenderId: "598565423426",
  appId: "1:598565423426:web:9bad454bda987b2870e0db",
  measurementId: "G-SQN9B669SP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOKu_nPDlIq4-4StLlrFsVE9WZL7xYvVg",
  authDomain: "corporate-zone.firebaseapp.com",
  projectId: "corporate-zone",
  storageBucket: "corporate-zone.appspot.com",
  messagingSenderId: "309542655264",
  appId: "1:309542655264:web:1657b069db57de32c77345",
};

// Initialize Firebase
const initializeAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuthentication;

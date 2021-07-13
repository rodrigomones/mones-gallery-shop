import firebase from "firebase/app";
import "@firebase/firestore";

var firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA0xDI5ox9vGWhUh-gyPFr6F4u0V-XngG4",
  authDomain: "mones-store.firebaseapp.com",
  projectId: "mones-store",
  storageBucket: "mones-store.appspot.com",
  messagingSenderId: "1078442639103",
  appId: "1:1078442639103:web:30d555953083bff303d6ca",
});

export const getFirebase = () => {
  return firebaseConfig;
};

// Funciones de Firebase
export const getFirestore = () => {
  return firebase.firestore(firebaseConfig);
};

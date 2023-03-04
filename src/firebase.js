import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhALD5Ffmq9VCd_SiK58ek6mPT-p49GCM",
  authDomain: "upload-images-51181.firebaseapp.com",
  projectId: "upload-images-51181",
  storageBucket: "upload-images-51181.appspot.com",
  messagingSenderId: "1008994057718",
  appId: "1:1008994057718:web:320c2d2ffca135ef7d1bd7",
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;

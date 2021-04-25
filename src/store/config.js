import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaYBpdno78q_ruvpdZZ2DUy_KVnXdUq-I",
  authDomain: "doctornewproperty.firebaseapp.com",
  projectId: "doctornewproperty",
  storageBucket: "doctornewproperty.appspot.com",
  messagingSenderId: "391549388492",
  appId: "1:391549388492:web:cbe9ba19bd251b8c43a469",
  measurementId: "G-LND7N02W00"
};

  
firebase.initializeApp(firebaseConfig);

export { firebase };
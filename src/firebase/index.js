import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC_MU8oFjZmehJ1Uzd4g8LrJ0Yhfj6K5Fk",
  authDomain: "reactjs-44dd1.firebaseapp.com",
  databaseURL: "https://reactjs-44dd1.firebaseio.com",
  projectId: "reactjs-44dd1",
  storageBucket: "reactjs-44dd1.appspot.com",
  messagingSenderId: "1060004047126",
  appId: "1:1060004047126:web:626c2a1d768fb9f6cb0837"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
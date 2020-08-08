import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBWZiEALruBiIv829YVbsncDStkqhvRz4c",
  authDomain: "assignment-42ea6.firebaseapp.com",
  databaseURL: "https://assignment-42ea6.firebaseio.com",
  projectId: "assignment-42ea6",
  storageBucket: "assignment-42ea6.appspot.com",
  messagingSenderId: "71645185341",
  appId: "1:71645185341:web:934f3bd309b493a6a4f154"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
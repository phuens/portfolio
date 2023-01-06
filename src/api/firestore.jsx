import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBwoXrJNEqQ9aj-cHcHV2mKKTBjL1F9Xes",
    authDomain: "todayilearned-4ddce.firebaseapp.com",
    projectId: "todayilearned-4ddce",
    storageBucket: "todayilearned-4ddce.appspot.com",
    messagingSenderId: "1022375555309",
    appId: "1:1022375555309:web:bbfb1791f9756e9eef5ce4",
    measurementId: "G-5XY0QGBKLD"
  };
  
firebase.initializeApp(firebaseConfig);
if (firebase.app.name) {
  console.log('Firebase has been initialized');
} else {
  console.log('Firebase has not been initialized');
}
const db=firebase.firestore();

export default db;
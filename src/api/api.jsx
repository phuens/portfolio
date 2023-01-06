import firebase from "firebase/compat/app";


import { firebaseConfig } from '../constant/constants';

firebase.initializeApp(firebaseConfig);

export async function fetchTIL(){ 
  if (firebase.app.name) {
    console.log('Firebase has been initialized to', firebase.app.name);
  } else {
    console.log('Firebase has not been initialized');
  }
  const response =  firebase.firestore.collections('TIL')

  const snapshot = await response.get(); 
  return response.docs.map((doc) => ({
    id: doc.id, 
    ...doc.data()
  }))
}
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC8yPobXooeTUI3J9n6R4IoslWtyd5hdKc",
    authDomain: "netflix-build-b55f0.firebaseapp.com",
    projectId: "netflix-build-b55f0",
    storageBucket: "netflix-build-b55f0.appspot.com",
    messagingSenderId: "726354310128",
    appId: "1:726354310128:web:d799e2467a12e6de376335"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth };
  export default db;
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC3p6eoVnoQU74j2twtG6KrDCRmX4KyIjg",
    authDomain: "drive-clone-e8429.firebaseapp.com",
    projectId: "drive-clone-e8429",
    storageBucket: "drive-clone-e8429.appspot.com",
    messagingSenderId: "1052481147856",
    appId: "1:1052481147856:web:c06c67abb4d6e9dcb75fd5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const db = firebaseApp.firestore(); 

  export {auth, provider, db, storage};
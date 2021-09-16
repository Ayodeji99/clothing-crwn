import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCh3-XTD2QEGEGjDjWyZ9atfL6sn02qukk",
    authDomain: "crwn-db-cc720.firebaseapp.com",
    projectId: "crwn-db-cc720",
    storageBucket: "crwn-db-cc720.appspot.com",
    messagingSenderId: "335557630169",
    appId: "1:335557630169:web:ecaab98510e5c7c6c086c8",
    measurementId: "G-0GF5FYL4S7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase';
import firebaseui from 'firebaseui';

// Firebase Config.  Normally, I would get this from a config file
const config = {
    apiKey: "AIzaSyAjIq7ue80gYKNbmOHndduAN5D2Kmt1UtI",
    authDomain: "test-e3a8c.firebaseapp.com",
    databaseURL: "https://test-e3a8c.firebaseio.com",
    projectId: "test-e3a8c",
    storageBucket: "test-e3a8c.appspot.com",
    messagingSenderId: "1054677503116"
};

export const app = firebase.initializeApp(config);
export const auth = app.auth();
export const db = app.database();

// FirebaseUI Config.  Normally, I would get this from a config file
const uiConfig = {
    signInSuccessUrl: 'https://test-e3a8c.firebaseapp.com/',
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};

// Init firebase ui
const fbUI = new firebaseui.auth.AuthUI(auth);

// Firebase helpers to export
export const fb = {

    // Uses firebase UI to trigger the login widget
    loginUI: (elId) => {
        fbUI.start(elId, uiConfig);
    },

    // Log the user out
    logout: () => auth.signOut(),

    // Watches for auth status changes
    watchAuthChange: (fn) => auth.onAuthStateChanged(fn)
};
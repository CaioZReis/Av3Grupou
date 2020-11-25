import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDNvBVXBPbJJhJGtFxuHtHG8ettdLNvboM",
    authDomain: "prova-moveis.firebaseapp.com",
    databaseURL: "https://prova-moveis.firebaseio.com",
    projectId: "prova-moveis",
    storageBucket: "prova-moveis.appspot.com",
    messagingSenderId: "221371152019",
    appId: "1:221371152019:web:b051db649491062d497f66",
    measurementId: "G-0VMZ7GVGT7"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

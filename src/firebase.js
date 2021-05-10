import firebase from 'firebase/app'; 

import 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyA2DJ6zqsUmaFXqLSQChdHjz-8ckM0JKGs",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
});

console.log('app', app)


export const auth = app.auth();

export default app;
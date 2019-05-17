import Firebase from 'firebase';
 let config = {
    apiKey: "AIzaSyA1xFEaOCiqSX02O-KOg621hFhD5aJZWPE",
    authDomain: "swapbook-2403f.firebaseio.com",
    databaseURL: "https://swapbook-2403f.firebaseio.com",
    projectId: "swapbook-2403f",
    storageBucket: "swapbook-2403f.appspot.com",
    messagingSenderId: "937326228131"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
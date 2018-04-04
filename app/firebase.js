import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyB7Iq67mnofA3JNqClLZDGbGrVbxQvTw7s",
    authDomain: "hang-ebd58.firebaseapp.com",
    databaseURL: "https://hang-ebd58.firebaseio.com",
    projectId: "hang-ebd58",
    storageBucket: "hang-ebd58.appspot.com",
    messagingSenderId: "1085460977984"
};
firebase.initializeApp(config);

export default firebase;

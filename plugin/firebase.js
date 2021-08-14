import firebase from "firebase/app"
import "firebase/database"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBGks2_LWAl0QpHxqBzK0dPj6XYtakGrbg",
    authDomain: "score-601db.firebaseapp.com",
    databaseURL: "https://score-601db-default-rtdb.firebaseio.com",
    projectId: "score-601db",
    storageBucket: "score-601db.appspot.com",
    messagingSenderId: "97589736704",
    appId: "1:97589736704:web:521a20b24ffff2f05aefe5"
  })
}

export default firebase

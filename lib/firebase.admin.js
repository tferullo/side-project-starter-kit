const firebase = require("firebase-admin");
const serviceAccount = require("./firebase/file.json");

if (!firebase.apps.length) {
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "firebaseurl"
  });
}

module.exports = firebase;

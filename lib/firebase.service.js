import * as firebase from "firebase";

/**
 * firebase config object
 */
const config = {};

/**
 * only init firebase app if it doesn't already exist
 */
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

/**
 * export auth so we can use it in the HOC
 */
const auth = firebase.auth();

export { auth, firebase };

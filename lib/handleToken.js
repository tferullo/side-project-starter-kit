const admin = require("./firebase-admin");

const checkIfAuthenticated = async req => {
  if (
    req.headers.authorization &&
    req.headers.authorization.includes("Bearer")
  ) {
    // eslint-disable-next-line prefer-destructuring
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  try {
    if (!req.authToken) return false;
    const userInfo = await admin.auth().verifyIdToken(req.authToken);
    req.authId = userInfo.uid;
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
module.exports = checkIfAuthenticated;

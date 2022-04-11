var admin = require("firebase-admin");
var serviceAccount = require("./firebaseCredential.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-project-1-58a04.firebaseio.com",
    storageBucket: process.env.BUCKET_URL
});

module.exports = admin;
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const firebase = require("../config/firebaseConfig");
const e = require('express');

module.exports.uploadToFirebase = async (files) => {
    const values = [];
    try {
        for (let file of files) {
            const name = uuidv4();
            const fileName = name + path.extname(file.originalname);
            await firebase.storage().bucket().file(fileName).createWriteStream().end(file.buffer);
            values.push(fileName);
        }
    }
    catch (err) {
        console.error(err);
        throw e;
    }
    return fileName;
}

module.exports.convertToBASE64 = (files) => {
    const values = [];
    try {
        for (let file of files)
            values.push(file.buffer.toString("base64"));
    }
    catch (err) {
        console.error(err);
        throw e;
    }
    return values;
}
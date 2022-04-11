const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    birthday: {
        type: Date,
        validate: {
            validator: function (value) {
                let today = new Date();
                return today > value;
            },
            message: props => `Date de naissance invalide, ${props.value}`
        }
    },
    address: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        match: /^[0-9]{10}$/
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 60,
        match: /^[a-z0-9._-]{1,30}@[a-zA-Z0-9.\-_]{1,20}\.[a-z]{1,10}$/
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model("client", clientSchema);
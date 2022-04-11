const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurantType",
        required: true,
    }],
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 50
    },
    address: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
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
    description: {
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

module.exports = mongoose.model("restaurant", restaurantSchema);
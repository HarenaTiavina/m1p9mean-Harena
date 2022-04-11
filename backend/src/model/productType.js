const mongoose = require("mongoose");

const productTypeSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    label: {
        type: String,
        required: true,
        trim: true,
        maxlength: 40,
        unique: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    icon: {
        type: String,
        trim: true,
        required: true
    },
    color: {
        type: String,
        trim: true,
        maxlength: 7,
        match: /^#[0-9a-zA-Z]{6}$/,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model("productType", productTypeSchema);
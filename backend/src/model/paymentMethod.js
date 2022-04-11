const mongoose = require("mongoose");

const paymentMethodSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    label: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        maxlength: 40
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
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model("paymentMethod", paymentMethodSchema);
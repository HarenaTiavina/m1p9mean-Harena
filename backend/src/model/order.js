const mongoose = require("mongoose");
const status = require('../utils/constant').status;

const orderSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                let today = new Date();
                return today < value;
            },
            message: props => `Date de livraison invalide, ${props.value}`
        }
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "client",
        required: true,
    },
    address: {
        type: String,
        required: true,
        maxLength: 100
    },
    lng: {
        type: Number,
    },
    lt: {
        type: Number,
    },
    comment: {
        type: String,
        required: true,
        maxLength: 100
    },
    develiryMan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    total: {
        type: Number,
        validate: {
            validator: function (value) {
                return 0 < value;
            },
            message: props => `Montant invalide, ${props.value}`
        }
    },
    freightCharges: {
        type: Number,
        validate: {
            validator: function (value) {
                return 0 < value;
            },
            message: props => `Frais de livraison invalide, ${props.value}`
        }
    },
    status: {
        type: String,
        required: true,
        default: status[2],
        enum: status,
    }
});

module.exports = mongoose.model("order", orderSchema);
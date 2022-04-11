const mongoose = require("mongoose");
const status = require('./../utils/constant').status;

const orderDetailsSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return 0 < value;
            },
            message: props => `Quantité invalide, ${props.value}`
        }
    },
    unitPrice: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return 0 < value;
            },
            message: props => `Prix unitaire invalide, ${props.value}`
        }
    },
    total: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return 0 < value;
            },
            message: props => `Montant invalide, ${props.value}`
        }
    },
    discount: {
        type: Number,
        validate: {
            validator: function (value) {
                return 0 < value && 100 > value;
            },
            message: props => `Remise invalide, ${props.value}`
        }
    },
    status: {
        type: String,
        required: true,
        default: status[2],
        enum: status,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model("orderDetails", orderDetailsSchema);
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productType",
        required: true
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurant",
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 50
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    costPrice: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return this.sellingPrice > value && 0 < value;
            },
            message: props => `Prix de revient invalide, ${props.value}`
        }
    },
    sellingPrice: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return this.costPrice < value && 0 < value;
            },
            message: props => `Prix de vente invalide, ${props.value}`
        }
    },
    images: [{
        type: String,
    }],
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model("product", productSchema);
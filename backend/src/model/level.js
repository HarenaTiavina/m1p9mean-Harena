const mongoose = require("mongoose");

const levelSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    min: {
        type: Number,
        validate: {
            validator: function (value) {
                return ((this.max && value < this.max) || !this.max) && 0 < value;
            },
            message: props => `Limite inférieur invalide, ${props.value}`
        }
    },
    max: {
        type: Number,
        validate: {
            validator: function (value) {
                return (this.min ?? 0) < value && 0 < value;
            },
            message: props => `Limite supérieur invalide, ${props.value}`
        }
    },
    value: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return (value > 0 && value < 100);
            },
            message: props => `La valeur du palier de prix doit être comprise entre 0 et 100, ${props.value}`
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

module.exports = mongoose.model("level", levelSchema);
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    size: {
        required: true,
        type: Number
    },

    color: {
        required: true,
        type: String
    },

    price: {
        required: true,
        type: Number
    },

    description: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('TestproductDetail', dataSchema)
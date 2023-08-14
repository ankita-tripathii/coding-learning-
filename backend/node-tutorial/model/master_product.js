const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    product_name: {
        required: true,
        type: String
    },
    product_description: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    // Reference Document
    created_user:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:'UserDetail'
    }
},
{
  timestamps: true
})

module.exports = mongoose.model('masterproduct', dataSchema)
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    },
    emailId: { // Model validation regex
        required: true,
        type: String
    }
},
{
  timestamps: true
})

module.exports = mongoose.model('UserDetail', dataSchema)
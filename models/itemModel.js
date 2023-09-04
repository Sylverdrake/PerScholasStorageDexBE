const mongoose = require('mongoose');

const Schema = mongoose.Schema

const itemSchema = new Schema
({
    name: {type: String, required: true},
    location: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
},
//Tells us when property was created and updated.
{timestamps: true})

module.exports = mongoose.model('Item', itemSchema)


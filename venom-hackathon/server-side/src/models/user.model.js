// We will need the schema to create the mongoose class and the model to create the collection
const { Schema, model } = require('mongoose')

// Creating the User Schema
const userSchema = new Schema({

    password: {
        type: String,
        min: 10,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    googleId: {
        type: String
    }
}, {timestamps: true})

// Create the User collection on the mongo DB database
const User = model('user', userSchema)

// Export the User model to be used in the controllers
module.exports = User
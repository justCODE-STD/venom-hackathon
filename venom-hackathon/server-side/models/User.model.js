// We will need the schema to create the mongoose class and the model to create the collection
const { Schema, model } = require('mongoose')

// Creating the User Schema
const UserSchema = new Schema ({
    username: {
        type: String,
        min: 7,
        required: true
    },
    password: {
        type: String,
        min: 10,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateOfCreation: {
        type: Number,
        default: Date.now(),
        required: true
    }
})

// Create the User collection on the mongo DB database
const UserModel = model('Venom Users', UserSchema)

// Export the User model to be used in the controllers
module.exports = UserModel
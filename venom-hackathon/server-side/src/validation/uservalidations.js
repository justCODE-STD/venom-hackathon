// Importing the Joi Validator
const joi = require('joi')

// Creating the Joi Validator for Sign Up
const SignUp = joi.object({
    username: joi.string().min(7).required(),
    password: joi.string().min(10).required(),
    confirm_password: joi.string().ref('password').required(),
    email: joi.string().email().required()
})

// Export Validators
module.exports = {
    SignUp
}
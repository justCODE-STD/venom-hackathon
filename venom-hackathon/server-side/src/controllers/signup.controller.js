// Importing the model
const User = require('../models/user.model');

// Verification List
const { VerificationList } = require('../../cache.js')

// Email Sender
const { Mail } = require('../config/emailsender.js')

// Creating th Controller class
class UserSignUpControls {
    async SignUp (req, res) {
        const { password, email } = req.body
        try {
            const ExistingUser = await User.findOne({ email: email })
            if (!ExistingUser) {
                return res.status(400).json({
                    message: "This User already exists. Please try again"
                })
            }
            else {
                const code = require('nanoid')(6)
                VerificationList.push({
                    password: password,
                    email: email,
                    code: code,
                    time: Date.now()
                })
                const response = Mail(email, code)
                if (response) {
                    return res.status(200).json({
                        message: `A mail was sent to ${email}`
                    })
                }
                else {
                    return res.status(500).json({
                        message: "An error occurred"
                    })
                }
            }
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred"
            })
        }
    }
    async VerifyCode (req, res) {
        const { code } = req.body;
        try {
            const UserDetails = VerificationList.find((user)=>{
                return user.code === code
            })
            if (!UserDetails) {
                return res.status(404).json({
                    message: "Code is invalid"
                })
            }
            if (Date.now() > (UserDetails.time + 600000)) {
                return res.status(404).json({
                    message: "Code has expired"
                })
            }
            await User.create({
                password: UserDetails.password,
                email: UserDetails.email
            })
            // After the user should be redirected to sign in from the Front End 
            return res.status(200).json({
                message: "Sign Up successfull"
            })
        } catch (error) {
            return res.status(500).json({
                message: "An error occurred!"
            })
        } finally {
            const UserDetails = VerificationList.find((user)=>{
                return user.code === code
            })
            let filteredList = VerificationList.filter(item => item !== UserDetails);
            VerificationList = filteredList
        }
    }
}

module.exports = UserSignUpControls
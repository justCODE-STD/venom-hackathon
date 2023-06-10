
// Dependencies
const mongoose = require('mongoose');
const db_uri = process.env.MONGODB_URI;

// Connects app to database
module.exports = function connectDB () {
    mongoose.connect(db_uri).
    then(() => {
        console.log('Connected database successfully');
    });
}
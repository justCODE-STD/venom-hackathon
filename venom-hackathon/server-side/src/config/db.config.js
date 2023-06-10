
// Dependencies
const mongoose = require('mongoose');
const db_uri = process.env.MONGODB_URI;

// Connects app to database
module.exports = function connectDB () {
    mongoose.connect(db_uri, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).
    then(() => {
        console.log('Connected database successfully');
    }).
    catch((err) => {
        console.log(`Encountered an error wile connecting: ${err.message}`)
    })
}
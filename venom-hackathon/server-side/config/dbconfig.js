// Load all the environmental components of the application
require('dotenv').config();

// Connect to mongoDB within the function
function ConnectToDataBase () {
    require('mongoose').connect(process.env.MONGO_DB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(()=>{
        console.log(`-----------------------Connected to DataBase-----------------------`)
    }).catch((error) => {
        console.error(`-----------------------Error Occurred In Connecting to DataBase-----------------------`)
    })
}

// Export the function
module.exports = ConnectToDataBase
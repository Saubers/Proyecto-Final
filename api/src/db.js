 /*const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { database } = require('./keys')

const basename = path.basename(__filename)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(database.URI, {
            useNewUrlParser: true,
            useUndefinedTopology: true
        }
        );
        fs.readdirSync(path.join(__dirname, '/models'))
        .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
        .forEach((file) =>{
            require(path.join(__dirname, '/models', file))
        })
    console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw new Error(error.message)
    }
}

module.exports = connectDB; */
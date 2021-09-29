const mongoose = require('mongoose')
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const basename = path.basename(__filename);
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
      }
    );
    // console.log('conn en db.js',conn)
    fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      require(path.join(__dirname, '/models', file))
    });
    
  console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
   // console.log(error)
    console.error(`Error: ${error.message}`);
    throw new Error(error?.message);
  }
};

module.exports = connectDB;


  ///////////////////////////////////////////////////////////////
  //conexion realizada en base a lo sugerido en atlas.com

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
// const { MongoClient } = require('mongodb');
// const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// client.connect.on('open', _ =>{
//     console.log('Database is connected ')
//   })

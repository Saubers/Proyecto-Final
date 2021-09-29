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


///////////////////////////////////////////////////////////////////

// connect basado en la pagina de mongoDB-npm

module.exports = connectDB; */

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'myProject';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());



  ///////////////////////////////////////////////////////////////
  //conexion realizada en base a lo sugerido en atlas.com

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// client.connect.on('open', _ =>{
//     console.log('Database is connected ')
//   })

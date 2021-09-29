const express = require('express')
const connectDB = require('./db.js')

const config = require('./server/config.js')

//database


const app = config(express())

//starting server
app.listen(app.get('port'), () => {
    connectDB()
    console.log('Server on port', app.get('port'))
})
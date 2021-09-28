const express = require('express')

const config = require('./server/config.js')

//database
require('./db')

const app = config(express())

//starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})
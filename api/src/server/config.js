const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const errorHandler = require('errorhandler');



const routes = require('../routes/index')

module.exports = app => {

    // Settings
    app.set('port', process.env.PORT || 3002)
    

     //middlewares
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/uploads')}).fields('image'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(cors())

     //routes
    routes(app);

     //static files
     app.use('/public', express.static(path.join(__dirname, '../public')))

     //errorhandlers
     if('development' === app.get('env')) {
     app.use(errorHandler);
     }


return app;
}
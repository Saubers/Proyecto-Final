const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const express = require('express');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
require('../controllers/passport')

const routes = require('../routes/index')

module.exports = app => {

    // Settings
    app.set('port', process.env.PORT || 3002)
    

     //middlewares
    dotenv.config()
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/uploads')}).fields('image'));
    app.use(express.urlencoded({extended: false}));
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }))
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.json());
    app.use(cors());
    app.use(flash());


    // Variables globales

    app.use((req, res, next) => {
        res.locals.succes_msg = req.flash('succes_msg');
        res.locals.error_msg = req.flash('error_msg')
        res.locals.error = req.flash('error')
        res.locals.user = req.user || null;
        next();
    })
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
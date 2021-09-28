const express = require('express');
const router = express.Router();



module.exports = app => {
    router.get('/', function(req, res){
        res.send("index")
    });
   
    app.use(router);
}
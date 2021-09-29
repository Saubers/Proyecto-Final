const express = require('express');
const router = express.Router();
const {idCars, GetAllCars, CreateProduct, ProductByName} = require('../controllers/carsFunction');


module.exports = app => {
    router.get('/', function(req, res){
        res.send("index")
    });
    router.post('/categories');

    router.delete('/categories');

    router.put('/categories');

    router.get('/products/:id', idCars);
    
    router.get('/products', GetAllCars);
    
    router.get('/products', ProductByName);


    router.post('/products', );

    router.delete('/products');

    router.put('/products');

    router.get('/products/:categories');



    app.use(router);
}
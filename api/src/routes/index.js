const express = require('express');
const router = express.Router();
const {idCars, GetAllCars, CreateProduct,DeleteCar,ModifiCar} = require('../controllers/carsFunction');
const { CreateCategory, DeleteCategory, ModifiCategory} = require('../controllers/categoriesFunction.js')

module.exports = app => {
    router.get('/', function(req, res){
        res.send("index")
    });
    //Categories
    router.post('/categories',CreateCategory);
    
    router.delete('/categories',DeleteCategory);
    
    router.put('/categories',ModifiCategory);

    router.get('/products/:categories');
    
    //Productssss

    router.get('/products/:id', idCars);
    
    router.get('/products', GetAllCars);

    router.post('/products', CreateProduct );

    router.delete('/productsDelete/:id',DeleteCar);

    router.put('/productsPut/:id',ModifiCar);




    app.use(router);
}
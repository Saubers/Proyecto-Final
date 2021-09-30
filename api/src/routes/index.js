const express = require('express');
const router = express.Router();
const {idCars, GetAllCars, CreateProduct,DeleteCar,ModifiCar, SearchCars} = require('../controllers/carsFunction');
const { CreateCategory, DeleteCategory, ModifiCategory, getByCategory} = require('../controllers/categoriesFunction.js')

module.exports = app => {
    router.get('/', function(req, res){
        res.send("index")
    });
    //Categories
    router.post('/categories',CreateCategory);
    
    router.delete('/categories',DeleteCategory);
    
    router.put('/categories',ModifiCategory);

    router.get('/categories/:categories', getByCategory);
    
    //Productssss

    router.get('/products/:id', idCars);
    
    router.get('/products', GetAllCars);
    
    router.get('/searchCars', SearchCars);
    
    router.post('/products', CreateProduct );

    router.delete('/productsDelete/:id',DeleteCar);

    router.put('/productsPut/:id',ModifiCar);




    app.use(router);
}
const express = require('express');
const router = express.Router();
const {idCars, GetAllCars, CreateProduct,DeleteCar,ModifiCar, SearchCars, carBrands, uploadFile} = require('../controllers/carsFunction');
const { CreateCategory, DeleteCategory, ModifiCategory, getByCategory,GetAllCategories} = require('../controllers/categoriesFunction.js')
//const {getUsers, createUser} = require('../controllers/userFunction')
module.exports = app => {
    router.get('/', function(req, res){
        res.send("index")
    });
    //Categories
    router.post('/categories',CreateCategory);
    
    router.delete('/categories',DeleteCategory);
    
    router.put('/categories',ModifiCategory);

    router.get('/categories/:categories', getByCategory);

    router.get('/categories', GetAllCategories);

    
    //Productssss

    router.get('/products/:id', idCars);
    
    router.get('/products', GetAllCars);

    router.get('/searchbrand', carBrands)
    
    router.get('/searchCars', SearchCars);
    
    router.post('/products', CreateProduct );

    router.post('/uploadFiles', uploadFile)

    router.delete('/productsDelete/:id',DeleteCar);

    router.put('/productsPut/:id',ModifiCar);



    /////////////USERS
    
    //router.get('users',getUsers);

    //router.post('/users',createUser)








    app.use(router);
}


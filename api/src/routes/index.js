const express = require('express');
const router = express.Router();
const {idCars, GetAllCars, CreateProduct,DeleteCar,ModifiCar, SearchCars, carBrands, uploadFile} = require('../controllers/carsFunction');
const { CreateCategory, DeleteCategory, ModifiCategory, getByCategory,GetAllCategories} = require('../controllers/categoriesFunction.js')
const { agregarOrden,AllOrders,OrdenesByUsuario,cartOrderId,putCart, deleteCart,CartUser} = require('../controllers/cartFunctions')
// const {getUsers, createUser} = require('../controllers/userFunction')
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
    
    // router.get('users',getUsers);

    // router.post('/users',createUser)




    ///////Carrito

    ///todos los items del Carrito con query 
    router.get('/orders',AllOrders)
    

    /// GET users/:idUser/cart
    router.get('/users/:idUser/cart',CartUser)


    //Ruta para agregar Item al Carrito
    router.post('/users/:idUser/cart', agregarOrden)

    ///modificar
    router.put('/orders/:id',putCart)

    //Orden en particular 
    router.get('/orders/:id',cartOrderId)

    //Ordener de usuario
    router.get('/users/:id/orders', OrdenesByUsuario)

    //Vaciar carrito
    router.get('/users/:idUser/cart/',deleteCart)

    app.use(router);
}


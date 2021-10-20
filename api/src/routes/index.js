const express = require('express');
const router = express.Router();
const {idCars, GetAllCars, CreateProduct,DeleteCar,ModifiCar, SearchCars, carBrands, uploadFile} = require('../controllers/carsFunction');
const { CreateCategory, DeleteCategory, ModifiCategory, getByCategory,GetAllCategories} = require('../controllers/categoriesFunction.js')
const { agregarOrden,AllOrders,OrdenesByUsuario,cartOrderId,putCart, deleteCart,CartUser,checkout} = require('../controllers/cartFunctions')
const { createUser, loginUser, logout, getUserData, updateProfile, deleteUser, changeStateToInactive } = require('../controllers/userFunction');
const {addReview, putReview,delReview,getReview} = require('../controllers/reviewFunctions')
const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'PROD_ACCESS_TOKEN',
});
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



   // USERS
    
    router.post('/register', createUser);

    router.post('/login', loginUser)

    router.get("/user/:id", getUserData)

     router.put('/profile', updateProfile)

    router.delete('/delete-user', deleteUser)

    router.put('/delete_user', changeStateToInactive)

    // router.put('/new-password')
 
    ///////Carrito

    ///todos los items del Carrito con query 
    router.get('/orders',AllOrders)
    

    /// GET users/:idUser/cart
    router.get('/users/:idUser/cart',CartUser)


    //Ruta para agregar Item al Carrito
    router.post('/users/:id/cart', agregarOrden)

    ///modificar
    router.put('/orders/:id',putCart)

    //Orden en particular 
    router.get('/orders/:id',cartOrderId)

    //Ordener de usuario
    router.get('/users/:id/orders', OrdenesByUsuario)

    
    

    //Vaciar carrito
    router.delete('/cart/delete/:id/',deleteCart)



    ///// mercadopago

    router.post('/checkout', checkout)
    
    
    //POST /product/:id/review
    router.post('/product/:id/review',addReview)
    
    // PUT /product/:id/review/:idReview
    
    router.put('/product/:id/review/:idReview', putReview)
    
    //DELETE /product/:id/review/:idReview
    router.delete('/product/review/:idReview',delReview)
    
    //GET /product/:id/review/
    router.get('/product/:id/review',getReview)




    app.use(router);
}


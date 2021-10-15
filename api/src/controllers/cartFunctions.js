const Cart = require('../models/Cart');
const Car = require('../models/Cars.js');

const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'APP_USR-2749767482103662-101420-561af7e27dc34122c3662d5282e6772b-1000552229',
});

const agregarOrden = async function(req,res){
    var myId = req.params.id
    let {publication,price,state,cantidad} = req.body
    try{    
        const cart = new Cart({
        user: myId,
        publication: publication,
        cantidad : cantidad,
        price : price,
        state : state
        });
        await cart.save()
        res.status(200).json(cart)
    }catch(error){
        console.log(error)
    }
}

///
const CartUser = async function(req,res){
    let {idUser} = req.params
    try {
        const userOrder = await Cart.find({user : idUser}).populate('publication').populate('user')
        if(userOrder){
            res.status(200).send(userOrder)
        }else{
            res.status(404).send('Id invalida')
        }
    } catch (error) {
        console.log(error)
    }
}

/*
Esta ruta puede recibir el query string status
 y deberá devolver sólo las ordenes con ese status. */
const AllOrders = async function (req,res){
    let {status } = req.query     
    if(status ){
        try {
            const AllOrders = await Cart.find({status : status }).populate('publication')
            return res.status(200).send(AllOrders);
        } catch (error) {
            console.log(error)
        }
    }
    else{
        try {
            const AllOrders = await Cart.find().populate('publication')
          //  console.log('allOrders',AllOrders)
        return res.status(200).send(AllOrders);

    } catch (error) {
        console.log(error)
    }
}
}

const OrdenesByUsuario= async function (req,res) {
    const {id} = req.params;
    try {
        let Ordenes = await Cart.find({user : id}).populate('publication').populate('user')
        res.status(200).send(Ordenes)

    } catch (error) {
        res.status(200).send(error)
    }
}


const cartOrderId = async function(req,res) {
    try {
        const {idOrder} = req.params;
        try {
            let Ordenes = await Cart.find({_id: idOrder}).populate('publication').populate('user')
            res.status(200).send(Ordenes)
    
        } catch (error) {
            res.status(200).send(Ordenes)
        } 
    } catch (error) {
        res.send(400).send(error)
    }
}

const putCart = async function(req,res){
    let idOrder = req.params.id
    let {idItem,idUsuario,price,state} = req.boddy
    try{    
        const cart =  Cart.findByIdAndUpdate(idOrder,{
        user: idUsuario,
        publication:idItem,
        price : price,
        state : state
        });
        res.send(cart);
    }catch(error){
        console.log(error)
    }

}

const deleteCart = async function(req,res){
    const { id } = req.params.id;
    console.log(req.params)
    try {
        const ProductDB = await Cart.findByIdAndDelete(id)
        console.log('ProductDB',ProductDB)
        if(ProductDB !== null){
            res.status(200).json(ProductDB)
        }
    }catch(error){
        console.log(error);
    }
}
const checkout = async function(req,res){
     const {user, publication, cantidad, state} = req.body
     console.log("PROBNADMP SI LLEGA",user, publication, cantidad, state);
    try{
        const items = []
        for(let i = 0; i < publication.length; i++){
            const car = await Car.findById(publication[i])
            const oneProduct = {
                title: car.name, 
                quantity: cantidad[i], 
                unit_price: car.price,
                picture_url: car.img[0], 
                currency_id: 'ARS', 
            }
            console.log('cartsFunctions 139',oneProduct)
            items.push(oneProduct)
        }
        let preferences = {
            items: items,
            // back_urls:{
            //     success:'http://localhost:3002/success',
            //     pending:'http://localhost:3002/pending',
            //     failure:'http://localhost:3002/failure',
            // },
            // auto_return:'approved'
        }
        mercadopago.preferences.create(preferences)
        .then((response)=>{
            console.log(response.body.init_point)
            res.redirect(response.body.init_point)
        })
    }catch(err){
        console.log(err)
    }
}

module.exports= {
    agregarOrden,
    AllOrders,
    OrdenesByUsuario,
    cartOrderId,
    putCart,
    deleteCart,
    CartUser,
    checkout
}
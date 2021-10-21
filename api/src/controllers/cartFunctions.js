const Cart = require('../models/Cart');
const Car = require('../models/Cars.js');
require('dotenv').config();
const { PROD_ACCESS_TOKEN } = process.env;

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
            const AllOrders = await Cart.find({status : status }).populate('publication').populate('user')
            return res.status(200).send(AllOrders);
        } catch (error) {
            console.log(error)
        }
    }
    else{
        try {
            const AllOrders = await Cart.find().populate('publication').populate('user')
            //  console.log('allOrders',AllOrders)
            return res.status(200).send(AllOrders);
            
        } catch (error) {
            console.log(error)
        }
    }
}

const OrdenesByUsuario= async function (req,res) {
    const {id} = req.params;
    const {status} = req.query;
    console.log('req.query',status)
    if(status){
        try {
            let Ordenes = await Cart.find({user : id}).find({ state : status  }).populate('publication')
            res.status(200).send(Ordenes)
        } catch (error) {
            console.log(error)
        }
    }else{
        try {
            let Ordenes = await Cart.find({user : id}).populate('publication')
            res.status(200).send(Ordenes)
            
        } catch (error) {
            res.status(200).send(error)
        }
    }
}


const cartOrderId = async function(req,res) {
    
    try {
        const id = req.params.id;
        console.log(id)
        try {
            let Ordenes = await Cart.find({_id: id}).populate('publication').populate('user')
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
    let {idItem,idUsuario,price,newState,cantidad} = req.body
    try{    
        const cart =  await Cart.findByIdAndUpdate(idOrder,{
            user: idUsuario,
            publication: idItem,
            cantidad : cantidad,
            price : price,
            state : newState
        });
        console.log('ACAAAAAAA',cart);
        res.send(cart._update);
    }catch(error){
        console.log(error)
    }
    
}

const deleteCart = async function(req,res){
    const  id  = req.params.id;
    console.log('id',id)
    try {
        const ProductDB = await Cart.findOneAndRemove({_id : id})
        console.log('ProductDB',ProductDB)
        if(ProductDB !== null){
            res.status(200).json(ProductDB)
        }
    }catch(error){
        console.log(error);
    }
}
const checkout = async function(req,res){
    const {user, publication, cantidad} = req.body
    const mercadopago = require ('mercadopago');
    
    mercadopago.configure({
        access_token: PROD_ACCESS_TOKEN,
    });
    try{
        
        const items = []
        for(let i = 0; i < publication.length; i++){
            const car = await Car.findById(publication[i])
            const oneProduct = {
                title: car.name, 
                quantity: cantidad[i], 
                unit_price: car.price,
                currency_id: 'ARS', 
            }
            items.push(oneProduct)
        }
        let preferences = {
            items: items,
            external_reference: user, 
            back_urls:{
                // https://proyecto-final-rho.vercel.app/pagos
                success:'localhost:3000/pagos',
                pending:'localhost:3000/pagos',
                failure:'localhost:3000/pagos',
            },
            auto_return:'approved'
        }
        mercadopago.preferences.create(preferences)
        .then((response)=>{
            res.send(response.body.init_point)
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
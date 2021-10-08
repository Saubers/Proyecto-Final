const Car = require('../models/Cars');
const Cart = require('../models/Cart');

const agregarOrden = async function(req,res){
    let {idUser} = req.params
    let {idItem,price,state} = req.body
    try{    
        const cart = new CarT({
        user: idUser,
        publication:idItem,
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
        const userOrder = await Cart.find({user : idUser})
        if(userOrder){
            res.status(200).send(user)
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
            const AllOrders = await Cart.find({status : status }).populate('car').populate('users')
            return res.status(200).send(AllOrders);
        } catch (error) {
            console.log(error)
        }
    }
    else{
        try {
        const AllOrders = await Cart.find().populate('car').populate('users')
        return res.status(200).send(AllOrders);

    } catch (error) {
        console.log(error)
    }
}
}

const OrdenesByUsuario= async function (req,res) {
    const {id} = req.params;
    try {
        let Ordenes = await Cart.find({user : id}).populate('car').populate('users')
        res.status(200).send(Ordenes)

    } catch (error) {
        res.status(200).send(error)
    }
}


const cartOrderId = async function(req,res) {
    try {
        const {idOrder} = req.params;
        try {
            let Ordenes = await Cart.find({_id: idOrder}).populate('car').populate('users')
            res.status(200).send(Ordenes)
    
        } catch (error) {
            res.status(200).send(Ordenes)
        } 
    } catch (error) {
        res.send(400).send(error)
    }
}

const putCart = async function(req,res){
    let idOrder = req.params
    let {idItem,idUsuario,price,state} = req.boddy
    try{    
        const cart =  Cart.findByIdAndUpdate(idOrder,{
        user: idUsuario,
        publication:idItem,
        price : price,
        state : state
        });
        await cart.save()
        res.send("Auto actualizado correctamente");
    }catch(error){
        console.log(error)
    }

}

const deleteCart = async function(req,res){
    const { id } = req.params.id;
    try {
        const ProductDB = await Car.findByIdAndDelete(id)
        if(ProductDB !== null){
            res.status(200).json(ProductDB)
        }
    }catch(error){
        next(error);
    }
}
module.exports= {
    agregarOrden,
    AllOrders,
    OrdenesByUsuario,
    cartOrderId,
    putCart,
    deleteCart,
    CartUser
}
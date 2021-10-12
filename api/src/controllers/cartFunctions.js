const Cart = require('../models/Cart');

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
module.exports= {
    agregarOrden,
    AllOrders,
    OrdenesByUsuario,
    cartOrderId,
    putCart,
    deleteCart,
    CartUser
}
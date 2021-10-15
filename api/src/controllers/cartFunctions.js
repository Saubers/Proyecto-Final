const Cart = require('../models/Cart');

const mercadopago = require ('mercadopago');

mercadopago.configure({
    access_token: 'TEST-6136905946660486-101322-d3c2d7427e978b5bd98fac6c652b25e8-378799934',
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
     const {user, publication, cantidad, price, state} = req.body
     console.log("PROBNADMP SI LLEGA",user, publication, cantidad, price, state);
    try{
        let preferences = {
            items:[
                {
                    _id: req.body._id,
                    title: req.cantidad,
                    unit_price: req.body.unit_price,
                    quantity: req.body.quantity,
                }
            ],
            back_urls:{
                success:'http://localhost:3002/success',
                pending:'http://localhost:3002/pending',
                failure:'http://localhost:3002/failure',
            },
            auto_return:'approved'
        }
        mercadopago.preferences.create(preferences)
        .then((response)=>{
            console.log(response.body)
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
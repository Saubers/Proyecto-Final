//Traer base de datos (card y categories)
const Car = require('../models/Cars.js');
require('../db.js')

const idCars = async (req,res)=>{
    const {id} =req.params;
    try{
        if (id) {
            let carDetail= await Car.findById(id).populate('Categories');
            console.log('esto es car detail',carDetail)
            let carId ={
            id: carDetail.id,
            marca:carDetail.brand,
            name:carDetail.name,
            description:carDetail.description,
            img:carDetail.img,
            category:carDetail.category,
            features:carDetail.features
            }
            res.status(200).send(carId)
        }
    }catch(error){
        res.status(404).send(error)
    }
}

const GetAllCars = async (req,res,next) => {
    try {
        const GetAll = await Car.find()
        //console.log(GetAll)
        return res.status(200).send(GetAll);
        
    }catch(error){
        res.status(404).send(error)
    }
}

//S25 Crear ruta para crear/agregar Producto
const CreateProduct = async (req,res,next) => {
    try{
        const {name,brand, model,description,img,category,features,doors,engine,petrol
            ,diesel,price,manual,automatic,traction,mileage} = req.body;

        const NewProduct = new Car({
            name,
            brand,
            model,
            img,
            description,
            features:{
                doors : doors,
                engine : {
                    petrol,
                    diesel
                },
                mileage : mileage,
                price : price,
                transmission :manual === null ? automatic : manual ,
                traction : traction,
            },
            category,
        });
        await NewProduct.save()
        res.status(200).json(NewProduct)
    }catch(error){
        next(error);
    }
}

//Buscar un producto por nombre exacto 
//FALTA IMPLEMENTAR FILTER CON INCLUDE
const ProductByName = async (req,res,next) => {
    const {name} = req.query;
    try {
        const ProductDB = await Car.findOne({"name" : name})
        if(ProductDB !== null){
            res.status(200).json(ProductDB)
        }
    }catch(error){
        next(error);
    }
}



module.exports = {
    idCars,
    CreateProduct,
    ProductByName,
    GetAllCars,
  }
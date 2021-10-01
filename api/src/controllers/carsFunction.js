//Traer base de datos (card y categories)
const Car = require('../models/Cars.js');

require('../db.js')

const idCars = async (req,res)=>{
    const {id} =req.params;
    try{
        if (id) {
            let carDetail= await Car.findById(id).populate('category');
            let carId ={
            id: carDetail.id,
            brand:carDetail.brand,
            name:carDetail.name,
            description:carDetail.description,
            img:carDetail.img,
            category:carDetail.category,
            features:carDetail.features
            }
            res.status(200).send(carId)
        }else {
            res.status(400).send("Id Undefine");
        }
    }catch(error){
        res.status(404).send(error)
    }
}


const GetAllCars = async (req,res,next) => {
        try {
            const GetAll = await Car.find()
            .populate('category')
            // console.log('getall',GetAll)
            return res.status(200).send(GetAll);
            
        }catch(error){
            //console.log(error)
            res.status(404).send(error)
        }
    }



//S25 Crear ruta para crear/agregar Producto
const CreateProduct = async (req,res,next) => {
    try{
        const {name,brand,price,model,description,img,category,features} = req.body;

        const NewProduct = new Car({
            name,
            brand,
            model,
            img,
            price,
            description,
            features,
            category,
        });
        await NewProduct.save((err)=> {
            if(err) return res.status(400).json(err)
        })
        res.status(200).json(NewProduct)
    }catch(error){
        next(error);
    }
}

//Buscar un producto por nombre exacto 
//FALTA IMPLEMENTAR FILTER CON INCLUDE
const SearchCars = async (req,res,next) =>{
    const { name } = req.query;
    try {
        const ProductDB = await Car.findOne({name:name})
        console.log(ProductDB)
        if(ProductDB !== null){
            return res.status(200).json([ProductDB])
        }
    }catch(error){
        next(error);
    }
}

const DeleteCar = async (req,res,next) =>{
    const { id } = req.params;
    try {
        const ProductDB = await Cars.findOne({"_id" : id})
        if(ProductDB !== null){
            res.status(200).json(ProductDB)
        }
    }catch(error){
        next(error);
    }
}

const ModifiCar = async(req,res) =>{
    const { id } = req.params;
    const updates = req.body;
    console.log(updates)
    try {
    await Car.findByIdAndUpdate(id,updates)
    res.send("Auto actualizado correctamente");
} catch (error) {
    console.log(error)
}
}


module.exports = {
    idCars,
    CreateProduct,
    GetAllCars,
    SearchCars,
    DeleteCar,
    ModifiCar
  }
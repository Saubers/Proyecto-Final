//Traer base de datos (card y categories)
const Car = require('../models/Cars.js');

require('../db.js')

const idCars = async (req, res) => {
    const { id } = req.params;
    try {
        if (id) {

            let carDetail = await Car.findById(id).populate('category');
            let carId = {
                id: carDetail.id,
                brand: carDetail.brand,
                name: carDetail.name,
                description: carDetail.description,
                img: carDetail.img,
                category: carDetail.category,
                features: carDetail.features,
                price: carDetail.price,
                stock: carDetail.stock,
                number: carDetail.number
            }
            res.status(200).send(carId)
        } else {
            res.status(400).send("Id Undefine");
        }
    } catch (error) {
        res.status(404).send(error)
    }
}


const GetAllCars = async (req, res, next) => {
    try {
        const GetAll = await Car.find().populate('category')
            .populate('category')
        // console.log('getall',GetAll)
        return res.status(200).send(GetAll);

    } catch (error) {
        //console.log(error)
        res.status(404).send(error)
    }
}



//S25 Crear ruta para crear/agregar Producto
const CreateProduct = async (req, res, next) => {
    try {
        const { brand,
            name,
            img,
            model,
            category,
            description,
            features_doors,
            features_engine_name,
            features_engine_cv,
            features_engine_torque,
            features_engine_combustion,
            features_transmission_manual,
            features_transmission_automatic,
            features_traction,
            features_mileage,
            price,
            stock } = req.body;

        const NewProduct = new Car({
            brand: brand,
            name: name,
            model: model,
            img: img,
            category: category,
            description: description,
            features: {
                doors: features_doors,
                engine: [
                    {
                        name: features_engine_name,
                        cv: features_engine_cv,
                        torque: features_engine_torque,
                        combustion: features_engine_combustion,
                    }
                ],
                transmission: {
                    manual: features_transmission_manual,
                    automatic: features_transmission_automatic,
                },
                traction: features_traction,
                mileage: features_mileage,
            },
            price: price,
            stock: stock
        });
        console.log(req.file)
        await NewProduct.save()
        res.status(200).json(NewProduct)
    } catch (error) {
        next(error);
    }
}

const uploadFile = async (req, res, next) => {
    console.log(req.file)
}

const carBrands = async (req, res, next) => {
    const { brand } = req.query;
    const productsBrand = await Car.find().populate('category')
    try {
        const productBrand = await productsBrand.filter((el) => el.brand.toLowerCase().includes(brand.toLowerCase()));
        console.log(productBrand)
        if (productBrand !== null) {
            return res.status(200).send(productBrand)
        }
    } catch (error) {
        next(error)
    }
}



//Buscar un producto por nombre exacto 
//FALTA IMPLEMENTAR FILTER CON INCLUDE
const SearchCars = async (req, res, next) => {
    const { name } = req.query;
    const ProductsDB = await Car.find().populate('category');
    try {
        /* const ProductsDB = await Car.find({name:name}).populate('category') */
        const ProductDB = await ProductsDB.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()));
        const ProductBrand = await ProductsDB.filter((el) => el.brand.toLowerCase().includes(name.toLowerCase()));
        console.log(ProductDB)
        if (ProductDB !== null || ProductBrand !== null) {
            return res.status(200).send(ProductDB.concat(ProductBrand));
        }
    } catch (error) {
        next(error);
    }
}

const DeleteCar = async (req, res, next) => {
    const { id } = req.params.id;
    console.log(id)
    try {
        const ProductDB = await Car.findByIdAndDelete(id)
        if (ProductDB !== null) {
            res.status(200).json(ProductDB)
        }
    } catch (error) {
        next(error);
    }
}

const ModifiCar = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    console.log(updates)
    try {
        await Car.findByIdAndUpdate(id, updates)
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
    ModifiCar,
    carBrands,
    uploadFile
}
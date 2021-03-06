require('../db.js')
const Cars = require('../models/Cars.js');
const Categories = require('../models/Categories.js');

const CreateCategory = async (req, res, next) => {
    try {
        const { name, description, cars } = req.body;

        const NewCat = new Categories({
            name,
            description,
            cars
        });
        await NewCat.save((err) => {
            if (err) return res.status(400).json(err)
        })
        res.status(200).json(NewCat)
    } catch (error) {
        next(error);
    }
}

const DeleteCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Categories.findByIdAndDelete(id)
        res.send("Categoria eliminada correctamente");
    } catch (error) {
        console.log(error)
    }
}

/* const ModifiCategory = async(req,res) =>{
    const { id } = req.params;
    const updates = req.body;
    console.log(updates)
    try {
    await Categories.findByIdAndUpdate(id, updates)
    res.send("Categoria actualizada correctamente");
} catch (error) {
    console.log(error)
}
} */

const ModifiCategory = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        await Categories.findByIdAndUpdate(id, updates)
        res.send("Categoria actualizada correctamente");
    } catch (error) {
        console.log(error)
    }
}

const getByCategory = async (req, res, next) => {
    if (Categories = req.query) {
        try {
            const carByCategories = await Cars.find({ "category": Categories })
            if (carByCategories !== null || carByCategories.length > 0) {
                res.status(200).json(carByCategories);
            }
        } catch (error) {
            next(error)
        }
    }
}


const GetAllCategories = async (req, res, next) => {
    try {
        const GetAll = await Categories.find()
        // console.log('getall',GetAll)
        return res.status(200).send(GetAll);
    } catch (error) {
        //console.log(error)
        res.status(404).send(error)
    }
}

module.exports = {
    CreateCategory,
    DeleteCategory,
    ModifiCategory,
    getByCategory,
    GetAllCategories
}
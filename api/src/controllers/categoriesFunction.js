require('../db.js')
const Categories = require('../models/Categories.js');

const CreateCategory = async (req,res,next) => {
    try{
        const {name,description,cars} = req.body;

        const NewCat = new Categories({
            name,
            description,
            cars
        });
        await NewCat.save()
        res.status(200).json(NewCat)
    }catch(error){
        next(error);
    }
}

const DeleteCategory = async (req,res,next) =>{
    const { id } = req.params;
    try {
    await Categories.findByIdAndDelete(id)
    res.send("Categoria eliminada correctamente");
} catch (error) {
    console.log(error)
}
}

const ModifiCategory = async(req,res) =>{
    const { id } = req.params;
    const updates = req.body;
    console.log(updates)
    try {
    await Car.findByIdAndUpdate(id,updates)
    res.send("Categoria actualizada correctamente");
} catch (error) {
    console.log(error)
}
}

module.exports = {
    CreateCategory,
    DeleteCategory,
    ModifiCategory
}
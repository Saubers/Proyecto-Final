//Traer base de datos (card y categories)


const idCars = async (req,res)=>{
    const {id} =req.params;
    try{
        if (id) {
            let carDetail= await card.findOne({where: {id}, include: categories});
            let carId ={
            id: carDetail.id,
            marca:carDetail.marca,
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

const GetAllCards = async (req,res,next) => {
    try {
        const GetAll = await card.findAll({
            include:{
                model:Card,
                atributes:["name","marca"]
            }
        })
        return res.status(200).json([GetAll]);
        
    }catch(error){
        res.status(404).send(error)
    }
    
}

module.exports = {
    idCars,
  }
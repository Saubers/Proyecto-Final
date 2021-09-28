//Traer base de datos (card y categories)

const idCards = async (req,res)=>{
    const {id} =req.params;
    try{
        if (id) {
            var detallecard= await card.findOne({where: {id}, include: categories});
            var cardDeId={
            id: detallecard.id,
            marca:detallecard.marca,
            name:detallecard.name,
            description:detallecard.description,
            img:detallecard.img,
            category:detallecard.category,
            features:detallecard.features
            }
            res.status(200).send(cardDeId)
        }
    }catch(error){
        res.status(404).send(error)
    }
}

module.exports = {
    idCards,
  }
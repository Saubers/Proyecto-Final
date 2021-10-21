const Cart = require('../models/Cart');


const searchIdOrder = async (req, res, next) => {
    const { id } = req.params;
    try {
        const ProductsDB = await Cart.find({_id:id})
            return res.status(200).send(ProductsDB);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    searchIdOrder
}
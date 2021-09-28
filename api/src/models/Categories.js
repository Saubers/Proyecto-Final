const {Schema ,model} = require('mongoose');


const CategoriesSchema = new Schema({
    name :{
        type : String,
        required: true
    },
    description : String,
    cars : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Car'}
    ]
})


module.exports = model('Categories', CategoriesSchema)
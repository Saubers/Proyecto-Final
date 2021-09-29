const { Schema, model } = require('mongoose')


const CarsSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    name :{
        type : String,
        required: true
    },
    model:{
        type: Number,
        required: true
    },
    description : String,
    img : {
        type : [String],
        required: true
    },
    features : [String],
    category : [
        {type: Schema.Types.ObjectId,ref:'Categories'}
    ]
})


module.exports =model('Car', CarsSchema)
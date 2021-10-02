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
    description : {
        type: String
    },
    img : {
        type : [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    features : {
        doors:{
            type: Number,
            required: true
        },
        engine:[{type: Object}],
        transmission:{
            manual:{
                type : String
            },
            automatic:{
                type : String
            }
        },
        traction: {
            type : String,
            required: true
        },
        mileage: {
            type: Number,
            required: true
        }
    },
    category: {
        type: Schema.Types.ObjectId,ref:'Categories'
    }
})


module.exports =model('Car', CarsSchema)
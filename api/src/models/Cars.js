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
    features : {
        price: {
            type: Number,
            required: true
        },
        doors:{
            type: Number,
            required: true
        },
        engine:{
            petrol:{
                type : [Object]
            },
            diesel:{
                type : [Object]
            }
        },
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
    category : [
        {type: Schema.Types.ObjectId,ref:'Categories'}
    ]
})


module.exports =model('Car', CarsSchema)
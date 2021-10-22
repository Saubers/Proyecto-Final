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
    },
    number:{
        type: Number,
        required: false
    },
    stock:{
        type: Number,
        required: true
    }
    
},
  {
    timestamps: true, // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
  });


module.exports =model('Car', CarsSchema)
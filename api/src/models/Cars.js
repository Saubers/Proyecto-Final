import { Schema, model } from 'mongoose'

const CarsSchema = new Schema({
    brand:{
        type: String,
        required: true
    },
    name :{
        type : String,
        required: true
    },
    description : String,
    img : {
        type : [String],
        required: true
    },
    features : [String],
    category : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Categories'}
    ]
})


export default model('Car', CarsSchema)
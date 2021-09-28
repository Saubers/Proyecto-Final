import { Schema, model } from 'mongoose'

const CarsSchema = new Schema({
    marca:{
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
    category : String ,
    features : [String],
    categories : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Categories'}
    ]
})


export default model('Car', CarsSchema)
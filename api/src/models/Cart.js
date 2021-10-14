const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
    {
        user : {
            type: Schema.Types.ObjectId,ref:'Use',
            require : true
        },
        publication : [
        {   type: Schema.Types.ObjectId,ref:'Car',
            require : true
        }
        ],
        cantidad : [String],
        price:{
            type: Number,
            required: true
        } ,
        state :{
            type : String,
        }
    }
)

module.exports = model("CartSchema", CartSchema);
 
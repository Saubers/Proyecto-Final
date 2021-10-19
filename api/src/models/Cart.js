const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
    {
        user : {
            type: Schema.Types.ObjectId,ref:'User',
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
        },
        date:{
            type:Date,
            default:Date.now
          }
    }
)

module.exports = model("CartSchema", CartSchema);
 
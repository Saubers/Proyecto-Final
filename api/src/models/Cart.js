const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
    {
        user : {
            type: Schema.Types.ObjectId,ref:'Users',
            require : true
        },
        publication : {
            type: Schema.Types.ObjectId,ref:'Cars',
            require : true
        },
        state :{
            type : String,
        }
    }
)

module.exports = model("CartSchema", CartSchema);
 
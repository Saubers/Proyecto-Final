const { Schema, model } = require("mongoose");

const ReviewSchema = new Schema(
    {
        user : {
            type: Schema.Types.ObjectId,ref:'Use',
            require : true
        },
        publication :
        {   type: Schema.Types.ObjectId,ref:'Car',
            require : true
        },
        calification : {
            type: Number,
            required : true
        },
        title : String,
        description: String,
    }
)

module.exports = model("Review", ReviewSchema);
 
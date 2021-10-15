const Review = require('../models/Review')

const addReview = async function(req,res){
    var id = req.params.id
    console.log(id)
    let {publication,description,calification, title} = req.body
    try{    
        const review = new Review({
        user: id,
        publication: publication,
        calification : calification,
        title : title,
        description : description,
        });
        console.log("Param",id)
        await review.save()
        res.status(200).json(review)
    }catch(error){
        console.log(error)
    }
}  

const putReview = async function(req,res){
    let idReview = req.params.idReview
    let publication = req.params.id
    let {user,description,calification, title} = req.body
    console.log('params',req.params)
    console.log('body',calification)
    try{    
        const review = await Review.findByIdAndUpdate(idReview,{
            user: user,
            publication: publication,
            calificacion : calification,
            title : title,
            description : description,
        });
        //console.log('review',review)
        res.status(200).send(review);
    }catch(error){
        console.log(error)
    }
}

const delReview = async function(req,res) {
    let idReview = req.params.idReview
    console.log(idReview)
    try {
        const ReviewDB = await Review.findByIdAndDelete(idReview)
        if(ReviewDB !== null){
            res.status(200).json(ReviewDB)
        }
    }catch(error){
        next(error);
    }
}

const getReview = async function (req,res) {
    let id = req.params.id  
    try {
        const getreview = await Review.find({publication : id})
        res.status(200).send(getreview)
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    addReview,
    putReview,
    delReview,
    getReview
}
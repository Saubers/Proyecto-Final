import react from 'react';
import {useSelector } from "react-redux";
import {getReview} from '../../actions/index'

const Review = ({props, publication, description, calification, title, Review}) =>{
    const review = useSelector((state) => state.review)
    console.log(review);
    const Reviews = []
    console.log(publication, description, calification, title, Review);
    return(
        // publication,
        // description,
        // calification,
        // title
        "Hola"
    )
}

export default Review;
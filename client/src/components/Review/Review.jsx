import {useDispatch, useSelector } from "react-redux";
import {getReview} from '../../actions/index'
import { useEffect } from "react";

const Review = (props) =>{
    const dispatch = useDispatch()
    console.log(props)
    useEffect(() => {
        dispatch(getReview(props.publication.id));
    }, [dispatch, props.publication.id])
    
    const review = useSelector((state) => state.review)
    console.log('review',review)
    return(
       <div>
           <div>
            {
                review && review.map(el=>(
                    <table>
                    <tr>
                    <h1>{el.title}</h1>
                    </tr>
                    <tr>
                    <h2>{el.description}</h2>
                    </tr>
                    </table>
             ))
            }
           </div>
       </div>
    )
}

export default Review;
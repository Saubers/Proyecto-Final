import {useDispatch, useSelector } from "react-redux";
import {getReview} from '../../actions/index'
import { useEffect, useState } from "react";
import style from './Review.module.css'
const Review = (props) =>{
    console.log("props",props)
    const [average,setAverage] = useState(0)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReview(props.publication.id))
        sumAverage()
    }, [dispatch, props.publication.id])
    const userInformacion = localStorage.getItem("userInformacion");
    const review = useSelector((state) => state.review)
    const usuario = JSON.parse(userInformacion)
    console.log('Hola', usuario);
    // const [comentario, setComentario] = useState({
    //         user: 
    //     })
    // const usuario = userInfo.find(el => el.id)
    function mathRound2 (num, decimales = 2) {
        var exponente = Math.pow(10, decimales);
        return (num >= 0 || -1) * Math.round(Math.abs(num) * exponente) / exponente;
    }


    function sumAverage() {
        let numero = 0
        let indice = 0
        if(review !== undefined){
            let avrg = review?.map(el=> el.calification)
            avrg?.forEach(element =>{
                numero = numero + element
                indice = indice + 1 

            })
            let avrgtotal = numero /  indice
            setAverage(mathRound2(avrgtotal))
        }
        else{
            console.log('error')
        }
        // console.log('avrg lenght' ,review?.length)
    }

    function handleChange(e){
        e.preventDefault()

    }
    
    return(
        <div className={style.divall}>
            <div>

                {
                    average && average ? <div>
                    <h2> Promedio de calificaciones  {average}</h2>      
                    </div>
                : <p>Pulicacion sin comentario</p>
            } 
            </div>
           <div className={style.containerproduct}>
            {   
                review && review.map(el=>(
                    <div className={style.divcart}>
                    <h5 className ={style.title}>{el.user?.fullname}</h5>
                    <h5>{el.title}</h5>
                    <h7>Calificacion : {el.calification}</h7>
                    <h6>{el.description}</h6>
                    </div>
             ))
            }
           </div>
           <div className={style.containerproduct}>
            <button onChange={e=>handleChange(e)}>Agregar comentario </button>
            <input></input>
           </div>
       </div>
    )
}

export default Review;
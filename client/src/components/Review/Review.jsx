import {useDispatch, useSelector } from "react-redux";
import {getReview, postReview} from '../../actions/index'
import { useEffect, useState } from "react";
import style from './Review.module.css'
const Review = (props) =>{
    const [average,setAverage] = useState(0)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReview(props.publication.id))
        sumAverage()
    }, [dispatch, props.publication.id])
    const userInformacion = localStorage.getItem("userInformacion");
    const review = useSelector((state) => state.review)
    const usuario = JSON.parse(userInformacion)
    const [comentario, setComentario] = useState({
            user: usuario._id,
            calification:'',
            title:'',
            description:'',
            publication: props.publication.id
    })
   
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

    //REVIEW
    function handleSelect (e) {
        setComentario({
            ...comentario,
            calification:e.target.value
        })
    }
    function handleTitle(e){
        e.preventDefault()
        setComentario({
            ...comentario,
            title:e.target.value
        })
    }
    function handleComentario(e){
        e.preventDefault()
        setComentario({
            ...comentario,
            description:e.target.value
        })
    }

    function handleClick(e){
        e.preventDefault(e);
        if (!comentario.calification || !comentario.title || !comentario.description) {
            alert("¡LLENA TODOS LOS CAMPOS!")
        }else{
        dispatch(postReview(comentario))
        alert("¡PRODUCTO AÑADIDO!")
        setComentario({
            calification:'',
            title:'',
            description:'',
        })}
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
            <button onClick={e=>handleClick(e)}>Agregar comentario </button>
            <select onChange={e=>handleSelect(e)}>
                <option value = '1'>1</option>
                <option value = '2'>2</option>
                <option value = '3'>3</option>
                <option value = '4'>4</option>
                <option value = '5'>5</option>
            </select>
            <input type= "text" value={comentario.title} onChange={(e) => handleTitle(e)}></input>
            <input type="text" value={comentario.description} onChange={(e) => handleComentario(e)} ></input>
           </div>
       </div>
    )
}

export default Review;
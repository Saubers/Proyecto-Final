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
                    <h7>Calificacion : {el.calification}★</h7>
                    <h6>{el.description}</h6>
                    </div>
             ))
            }
           </div>
           <hr />
           <div className={style.containerproduct}>
           <label>Calificar</label>
           <form className={style.formstyle}>
            <p className={style.clasificacion}>
                <input id="radio1" type="radio" name="estrellas" value="5" onClick={e => handleSelect(e)}/>
                <label for="radio1">★</label>
                <input id="radio2" type="radio" name="estrellas" value="4" onClick={e => handleSelect(e)}/>
                <label for="radio2">★</label>
                <input id="radio3" type="radio" name="estrellas" value="3" onClick={e => handleSelect(e)}/>
                <label for="radio3">★</label>
                <input id="radio4" type="radio" name="estrellas" value="2" onClick={e => handleSelect(e)}/>
                <label for="radio4">★</label>
                <input id="radio5" type="radio" name="estrellas" value="1" onClick={e => handleSelect(e)}/>
                <label for="radio5">★</label>
            </p>
            </form>
            <div className={style.divReview}>
                <label>Titulo :</label>
                <input type= "text" value={comentario.title} onChange={(e) => handleTitle(e)}></input>
                <label>Comentario</label>
                <textarea type="text" value={comentario.description} onChange={(e) => handleComentario(e)} ></textarea>
                <div className={style.divbtn}>
                    <button className={style.btnagregar} onClick={e=>handleClick(e)}>Agregar comentario </button>
                </div>
               
            </div>
            
           </div>

       </div>
    )
}

export default Review;
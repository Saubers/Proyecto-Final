import {useDispatch, useSelector } from "react-redux";
import {getReview, postReview, getCarDetail,getUserOrderStatus} from '../../actions/index'
import IconUser from '../image/userre.png';
import { useEffect, useState } from "react";
import style from './Review.module.css'
const Review = (props) =>{
    const [average,setAverage] = useState(0)
    
    const userInformacion = localStorage.getItem("userInformacion")
    const user = JSON.parse(userInformacion)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCarDetail(props.publication.id));
        dispatch(getReview(props.publication.id))
        sumAverage()
    },[]);

    let infoReview = {
        id : user?._id,
        status : "Completa"
    }
    useEffect(() => {
       dispatch(getUserOrderStatus(infoReview))
    },[])

    useEffect(()=>{
        OrdenState()
    },[])    
    const MyCar = useSelector((state) => state.carDetail)

    const userAllOrders = useSelector((state) => state.orders)

    const [isReview,setIsReview] = useState(false)
    
    function OrdenState() {
        if(userAllOrders){
            for (let i = 0; i < userAllOrders.length; i++) {
                if(userAllOrders[i]._id === props.publication.id ) {
                    console.log("entre",userAllOrders[i]._id,  )
                    setIsReview(true)
            }           
        }
    }
}


    const review = useSelector((state) => state.review)
    const data = useSelector((state)=> state.carDetail)
    const usuario = JSON.parse(userInformacion)
    const [comentario, setComentario] = useState({
            user: usuario?._id,
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
                <h4>Opiniones sobre {data.brand} {data.name}</h4>
                {
                    average && average ? <div className={style.divestre}>
                    <h2 className={style.title}>{average}★</h2><p>Promedio entre {review.length} opiniones</p>
                    </div>
                : <p>Pulicacion sin comentario</p>
            } 
            </div>
            <hr />
           <div className={style.containerproduct}>
            {   
                review && review.map(el=>{
                    return (
                        <div key={el._id} className={style.divcart}>
                    <h5 className={style.title}>{el.calification}★</h5>
                    <div>
                        <img src={IconUser} alt=''/>
                        {el.user && el.user ? <h3 >{el.user?.fullname}</h3> : <h3 >Anonimo</h3>} <br />
                    </div>
                    <strong>{el.title}</strong>
                    <h6>{el.description}</h6>
                    <hr />
                    </div>
             )})
            }
           </div>
           {isReview && isReview ?
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
                <label>Titulo</label>
                <input type= "text" value={comentario.title} onChange={(e) => handleTitle(e)}></input>
                <label>Comentario</label>
                <textarea type="text" value={comentario.description} onChange={(e) => handleComentario(e)} ></textarea>
                <div className={style.divbtn}>
                    <button className={style.btnagregar} onClick={e=>handleClick(e)}>Agregar comentario </button>
                </div>
               
            </div>
           </div>
           : <div>
            <h4>Puedes comentar una vez que compres el articulo!</h4>   
            </div>}

       </div>
    )
}

export default Review;
import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import { postCart, getUserOrder } from "../../actions";
import {useLocalStorage,borrarItem} from '../../useStorage/useLocalStorage';
import {Link} from "react-router-dom";
//import NavBar from "../NavBar/NavBar";

export default function Cart(props){
    // const idCar = useSelector((state)=> state.idCar)
    //const carrito = u seSelector ((state)=> state.cart)
    // console.log("ACA",idCar);
    const dispatch = useDispatch()
    const [idAuto, setIdAuto] = useLocalStorage('auto')
    const userInfo = localStorage.getItem("userInfo");


    //console.log(idAuto)
    
    const [amount, setAmount] = useState([])
    const [price,setPrice] = useState(0)
    const [input , setInput] = useState ({})
    
    function sumatotal() {
        let suma = [];
        let numero = 0
        for (let i = 0; i < amount.length; i++) {
            // setPrice(parseInt(amount.cantidad) * parseInt(amount.price))
            
            suma.push( amount[i].price * amount[i].cantidad)
        }
        // console.log('array suma',suma)
        suma.forEach(element =>{
            numero = numero + element
            // console.log(' numero ',numero)
            setPrice(numero)
        })
    }

    
    
    
    function sumarCar(idCar){
        const found = amount.find(element => element.id === idCar.id)
        if(found?.id !== idCar.id){
            setAmount([...amount,{
                id: idCar.id,
                brand: idCar.brand,
                carname :idCar.name,
                price : idCar.price,
                cantidad : 1
            }])
        }
        else{
            amount.forEach(element =>{
                if(element.id === idCar.id){
                    element.cantidad =  parseInt(element.cantidad + 1)
                }
            })
        }
        sumatotal()

    }
    
    //boton post filtrar todos los que tengan
    
    function handleClickSumar(car){
        sumarCar(car)
        sumatotal()
        // console.log('suma',amount)
    }
    function handleClickRestark(e){
        let numeroresta = 0
        const found = amount.find(element => element.id === e.id)
        if(found?.id === e.id && e.cantidad >=1){
            amount.forEach(element =>{
                if(element.id === e.id){
                    element.cantidad =  parseInt(element.cantidad - 1)
                }
            })
            numeroresta = price - e.price
            setPrice(numeroresta)
        }
        else if (e.cantidad <= 0){ 
            const filter = amount.filter(car => car !== e)
            // console.log('resta',filter)
            setAmount(filter)
        }
       


    }
    function handlePost(ev){
        ev.preventDefault()
        setInput({
        user:"615dc2f5f1a17cca9b833c49",
        publication: amount.map(el => el.id),
        cantidad : amount.map(el => el.carname + ' X ' +el.cantidad),
        price: price,
        state:"En proceso"
        })
        dispatch(postCart(input))
        console.log('INOPUT', input);
    }
    function handleDelete() {
        borrarItem('auto')
        setAmount([])
        setPrice(0)
    }


    return(
        <div>
            {/* <button onChange= {(e)=> handleSubmit(e)}>Comprar</button> */}
            <h3>PRODUCTOS</h3>
                {idAuto === undefined ? 
                <div>
                    CARRITO VACIO 
                    </div>
                : idAuto?.map(el => {
                return(
                    <div key={el.id}>
                        <h1>{el?.brand},{el?.carname}</h1>
                         {<img src={el.img[0]} alt='Erorr' width="200x" height="200px"></img>}
                        <h2>{el?.price} </h2>
                        <div>
                        <button onClick={()=>handleClickSumar(el)}>+1</button>

                        <h3>----------------------</h3>
                        </div>
                    </div>
            ) 
        })
        }
        {
            idAuto?.length ?
                <div>
                <button onClick={()=> handleDelete()}>VACIAR CARRITO</button>
                <button onClick={(ev)=> handlePost(ev)}>CONFIRMAR COMPRA</button>
                </div>
            : <div/>
            
        }
                <h3>TICKET</h3>
                <div>
                    <h3>----------------------</h3>
                    {
                        amount && amount.map(item=>{
                            if(item.cantidad >=0)
                            return(
                                <tr >
                    <li>{item.brand} {item.carname} {item.price} {item.cantidad}</li>
                    <button onClick={()=>handleClickRestark(item)}>-1</button>
                        </tr>
                        )
                        else{
                            <p>Elija cantidad</p>                            
                        }
                    })
                }
                {
                    
                    <div>
                    <h6>----------------------</h6>
                       <h4>{price}</h4>
                     </div>
                  }
                </div>
            <Link to= "/home/catalogo">
                <button>Back</button>
            </Link>
            </div>
            )
        
}

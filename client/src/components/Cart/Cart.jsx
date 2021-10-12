import { useDispatch, useSelector  } from "react-redux";
import { useEffect, useState } from "react";
import { postCart, getUserOrder } from "../../actions";
import {useLocalStorage,borrarItem} from '../../useStorage/useLocalStorage';
import {Link} from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import stylecart from '../Cart/Cart.module.css';


export default function Cart(props){
    // const idCar = useSelector((state)=> state.idCar)
    //const carrito = u seSelector ((state)=> state.cart)
    // console.log("ACA",idCar);
    const dispatch = useDispatch()
    const [idAuto, setIdAuto] = useLocalStorage('auto')
    const userInfo = localStorage.getItem("userInfo");


    
    
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
            <NavBar/>
            <hr />
            {/* <button onChange= {(e)=> handleSubmit(e)}>Comprar</button> */}
            <div className={stylecart.divbtn}>
                <h3>PRODUCTOS EN CARRITO {idAuto.length}</h3>
    
                <button className={stylecart.btndeleall} onClick={()=> handleDelete()}>VACIAR CARRITO</button>
            </div>
            
                <div className={stylecart.divall}>
                    <div className={stylecart.divcart}>
                    {idAuto === undefined ? 
                    <div>
                        CARRITO VACIO 
                        </div>
                    : idAuto?.map(el => {
                    return(
                        <div key={el.id} className={stylecart.containerproduct}>
                            
                                <div className={stylecart.imgcont}>
                                    <img src={el.img[0]} alt='Erorr' width="150x" height="150px"></img>
                                </div>
                                <div>
                                    <div>
                                        <h2>{el?.brand}<br/> {el?.name}</h2>
                                    </div>
                                    <div>
                                        <h2>${el?.price} </h2>
                                    </div>
                                </div>
                                <div className={stylecart.cantidad}>
                                    <p>Cantidad:</p><button className={stylecart.btn1} onClick={()=>handleClickSumar(el)}>+1</button>
                                </div>
                                <div className={stylecart.btnde}>
                                    <button className={stylecart.btndelee}>X</button>
                                </div>
                        
                        </div>
                ) 
            })
            }
            </div>
                <div className={stylecart.divticket}>
                    <h3>TICKET</h3>
                    <div className={stylecart.divdata}>
                        {
                            amount && amount.map(item=>{
                                if(item.cantidad >=0)
                                return(
                                    <tr className={stylecart.trdiv}>
                                        <li className={stylecart.listy}>{item.brand} {item.carname} ${item.price} <br/>Cantidad:{item.cantidad}</li>
                                        <button  className={stylecart.btndelee} onClick={()=>handleClickRestark(item)}>X</button>

                                    </tr>
                              
                            )
                            else{
                                <p>Elija cantidad</p>                            
                            }
                        })
                    }
                    <hr />
                        <div>
                        <h4>Total:{price}</h4>
                        </div>
                        <div>
                            <button className={stylecart.btncomprartodo} onClick={(ev)=> handlePost(ev)}>CONFIRMAR COMPRA</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            )
        
}

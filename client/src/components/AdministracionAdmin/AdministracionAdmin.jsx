import React,{useEffect} from "react";
import { useDispatch} from "react-redux";
import {getAllUsers} from '../../actions/index'
import NavBar from '../NavBar/NavBar'
import Cards from '../AdministracionAdmin/Cards'
import StyleUser from './Cards.module.css'
export default function AdministracionAdmin() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])
    
    return(  
        <div>
            <NavBar/>
            <div className = {StyleUser.ContainerCardsAdmin}>
                <Cards></Cards>
            </div>
        </div>
    )
} 
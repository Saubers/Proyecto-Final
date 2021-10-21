import React,{useEffect} from "react";
import { useDispatch, useSelector} from "react-redux";
import {putAdmin, getAllUsers} from '../../actions/index'
import { useState } from "react";
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
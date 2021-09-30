import axios from 'axios';

//Traemos al payload todos los autos
export function getCars() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/products");
        return dispatch({
          
            type:'GET_CARS',
            payload: json.data
})}}
export function getEngine() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/products");
        return dispatch({
            type:'GET_ENGINE',
            payload: json.data.map(el => el.features.engine)
})}}

export function getCarDetail(id){
    return async function (dispatch){
            var json= await axios.get("http://localhost:3002/products/"+id);
            console.log('hola',json.data);
            return dispatch({
                type: "GET_CAR_DETAIL",
                payload: json.data
})}}

export function filterEngine(payload) {
    return{
        type:'FILTER_BY_ENGINE',
        payload
}}

export function filterKm(payload) {
    return{
        type:'FILTER_BY_KM',
        payload
}}

export function filterPrice(payload) {
    return{
        type:'FILTER_BY_PRICE',
        payload
}}

export function filterTraction(payload) {
    return{
        type:'FILTER_BY_TRACTION',
        payload
}}

export function filterTransmission(payload) {
    return{
        type:'FILTER_BY_TRANSMISSION',
        payload
}}

export function filterAge(payload) {
    return{
        type:'FILTER_BY_AGE',
        payload
}}

export function getNameCars(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3002/searchCars?name=" + name,{

            });
            return dispatch({
                type:"GET_NAME_CARS",
                payload: json.data
            })
        }catch(err){
            console.log(err)
        }
    };
    
} 
import axios from 'axios';

//Traemos al payload todos los autos
export function getCars() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/products");
        return dispatch({
          
            type:'GET_CARS',
            payload: json.data
})}}

export function getRecipeDetail(id){
    return async function (dispatch){
            var json= await axios.get("http://localhost:3001/cars/" + id);
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
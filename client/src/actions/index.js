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
            return dispatch({
                type: "GET_CAR_DETAIL",
                payload: json.data
})}}

export function postProduct(payload){
    return async function(dispatch){   
        const json =  await axios.post("http://localhost:3002/products", payload);
        return dispatch({
            type: 'POST_PRODUCT',
            payload : json
        })
    }
}

export function userRegister(payload){
return async function (dispatch){
    const json = await axios.post('http://localhost:3002/register',payload);
    return dispatch({
        type: 'USER_REGISTER',
        payload: json
    })
}
}

export function authUser(){
    return async function (dispatch){
        const json = await axios.post('http://localhost:3002/authenticate');
        return dispatch({
            type: 'USER_AUTH',
            payload: json
        })
    }
}

export function DeleteCar(id){
    
    return async function (dispatch){
            var json= await axios.delete("http://localhost:3002/productsDelete/:id" + id);
            return dispatch({
                type: "DELETE_CAR",
                payload: json
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
    console.log('action',name)
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3002/searchCars?name=" + name);
            return dispatch({
                type:"GET_NAME_CARS",
                payload: json.data
            })
        }catch(err){
            console.log(err)
        }
    };
    
} 


export function getBrandCars(name){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3002/searchbrand?brand=" + name,{

            });
            return dispatch({
                type:"GET_BRAND_CARS",
                payload: json.data
            })
        }catch(err){
            console.log(err)
        }
    };
    
} 

export function getCategories(){
    return async function(dispatch){
        try{
            var json = await axios.get("http://localhost:3002/categories");
            return dispatch({
                type:"GET_CATEGORIES",
                payload: json.data
            })
        }catch(err){
            console.log(err)
        }
    };
    
} 
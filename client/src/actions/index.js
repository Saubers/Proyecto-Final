import axios from 'axios';
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from './userConstants';

//Traemos al payload todos los autos
export function getCars() {
    return async function (dispatch) {
        var json = await axios.get("https://pf-car-shop.herokuapp.com/products");
        return dispatch({
            type: 'GET_CARS',
            payload: json.data
        })
    }
}

export function getOrder() {
    return async function (dispatch) {
        var json = await axios.get("https://pf-car-shop.herokuapp.com/orders");
        return dispatch({
            type: 'GET_ORDERS',
            payload: json.data
        })
    }
}

export function getOrderByID(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/orders/" + id);
        return dispatch({
            type: 'GET_ORDERS_BY_ID',
            payload: json.data
        })
    }
}

export function getOrderByUsuario() {
    const id = '615dc2f5f1a17cca9b833c49'
    return async function (dispatch) {
        var json = await axios.get("https://pf-car-shop.herokuapp.com/users/"+id+"/orders");
        return dispatch({
            type: 'GET_ORDERS_BY_USUARIO',
            payload: json.data
        })
    }
}

export function getEngine() {
    return async function (dispatch) {
        var json = await axios.get("https://pf-car-shop.herokuapp.com/products");
        return dispatch({
            type: 'GET_ENGINE',
            payload: json.data.map(el => el.features.engine)
        })
    }
}

export function getCarDetail(id) {
    return async function (dispatch) {
        var json = await axios.get("https://pf-car-shop.herokuapp.com/products/" + id);
        return dispatch({
            type: "GET_CAR_DETAIL",
            payload: json.data
        })
    }
}

export  function getReview(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/product/"+id+"/review");
        return dispatch({
            type: "GET_REVIEW",
            payload: json.data
        })
    }
}
export function postProduct(payload) { 
    return async function (dispatch) {
        const json = await axios.post("https://pf-car-shop.herokuapp.com/products", payload);
        return dispatch({
            type: 'POST_PRODUCT',
            payload: json
        })
    }
}

export function putProduct(id, payload) {
   
    return async function (dispatch) {
        const json = await axios.put("https://pf-car-shop.herokuapp.com/productsPut/:id" + id, payload);
        return dispatch({
            type: 'PUT_PRODUCT',
            payload: json
        })
    }
}

export function postMg (payload){
    return async function (dispatch){
        const json = await axios.post("https://pf-car-shop.herokuapp.com/checkout", payload);
        {json && json? console.log('el json de postmg en action',json) : console.log('no hay json')}
        return dispatch({
            type: 'POST_MG',
            payload:json
        })
    }
}

export function postCategory(payload) {
    return async function (dispatch) {
        const json = await axios.post("https://pf-car-shop.herokuapp.com/categories", payload);
        return dispatch({
            type: 'POST_CATEGORY',
            payload: json
        })
    }
}

export function postCart(payload) {
    console.log(payload)
    return async function (dispatch) {
        const json = await axios.post("http://localhost:3002/users/"+payload.user+"/cart", payload);
        return dispatch({
            type: 'POST_CART',
            payload: json
        })
    }
}

export function postReview(payload ){
    return async function (dispatch){
        const json = await axios.post("http://localhost:3002/product/"+payload.id+"/review", payload)
        return dispatch({
            type: 'POST_REVIEW',
            payload:json
        })
    }
}

export function userRegister(payload) {
    return async function (dispatch) {
        const json = await axios.post('https://pf-car-shop.herokuapp.com/register', payload);
        return dispatch({
            type: 'USER_REGISTER',
            payload: json
        })
    }
}

export const signin =(mail, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {mail, password}})
try {
    const { data } = await axios.post('http://localhost:3002/login', {mail, password})
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data})
    localStorage.setItem('userInfo', JSON.stringify(data.token))
    localStorage.setItem('userInformacion', JSON.stringify(data))
    
    
} catch (error){
    dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message : error.message,
    })
}
}


export function deleteUser(id) {
    return async function (dispatch) {
        try {
            let json = await axios.delete("https://pf-car-shop.herokuapp.com/delete-user/:id" + id);
            return dispatch({
                type: "DELETE_USER",
                payload: json
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const userAdmin =(mail, password) => async (dispatch) => {
    dispatch({ type: 'USER_ADMIN_REQUEST', payload: {mail, password}})
try {
    const { data } = await axios.post('http://localhost:3002/login', {mail, password})
    dispatch({ type: 'USER_ISADMIN', payload: data})
    localStorage.setItem('userAdmin', JSON.stringify(data.state))
    
    
} catch (error){
    dispatch({
        type: USER_SIGNIN_FAIL,
        payload:
        error.response && error.response.data.message
        ? error.response.data.message : error.message,
    })
}
}

 export const getUserData = (userId) => async (dispatch, getState) => {
     dispatch({type: 'USER_DETAILS_REQUEST', payload: userId});
     const {
           userInfo 
        } = getState();
     try {
         const { data } = await axios.get(`https://pf-car-shop.herokuapp.com/user/${userId}`, {
         headers: { Authorization: `Bearer ${userInfo.token}`}
         });
         dispatch({ type: 'USER_DETAILS_SUCCESS', payload: data })
     } catch (error) {
         const message = error.response && error.response.data.message
         ? error.response.data.message : error.message;
         dispatch({type: 'USER_DETAILS_FAIL', payload: message})
     }
 }

 export const updateUserProfile = (user) => async (dispatch, getState) => {
    dispatch({ type: 'USER_UPDATE_PROFILE_REQUEST', payload: user });
    const {
        userInfo  ,
    } = getState();
    try {
      const { data } = await axios.put(`https://pf-car-shop.herokuapp.com/user/profile`, user, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      console.log(data)
      dispatch({ type: 'USER_UPDATE_PROFILE_SUCCESS', payload: data });
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem('userDetails', JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: 'USER_UPDATE_PROFILE_FAIL', payload: message });
    }
  };


export function DeleteCar(id) {
    return async function (dispatch) {
        try {
            var json = await axios.delete("https://pf-car-shop.herokuapp.com/productsDelete/:id" + id);
            return dispatch({
                type: "DELETE_CAR",
                payload: json
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}

export function DeleteCartId(id) {
    console.log('id',id)
    return async function (dispatch) {
        var json = await axios.delete("http://localhost:3002/cart/delete/" + id);
        return dispatch({
            type: "DELETE_CART_BY_ID",
            payload: json
        })
    }
}




export function filterEngine(payload) {
    return {
        type: 'FILTER_BY_ENGINE',
        payload
    }
}

export function filterKm(payload) {
    return {
        type: 'FILTER_BY_KM',
        payload
    }
}
export function listCart(payload) {
    return {
        type: 'LIST_CARD',
        payload
    }
}
export function filterPrice(payload) {
    return {
        type: 'FILTER_BY_PRICE',
        payload
    }
}

export function filterTraction(payload) {
    return {
        type: 'FILTER_BY_TRACTION',
        payload
    }
}

export function filterTransmission(payload) {
    return {
        type: 'FILTER_BY_TRANSMISSION',
        payload
    }
}

export function filterAge(payload) {
    return {
        type: 'FILTER_BY_AGE',
        payload
    }
}

export function getNameCars(name) {
    console.log('action', name)
    return async function (dispatch) {
        try {
            var json = await axios.get("https://pf-car-shop.herokuapp.com/searchCars?name=" + name);
            return dispatch({
                type: "GET_NAME_CARS",
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    };

}

export function getBrandCars(name) {
    return async function (dispatch) {
        try {
            var json = await axios.get("https://pf-car-shop.herokuapp.com/searchbrand?brand=" + name, {

            });
            return dispatch({
                type: "GET_BRAND_CARS",
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    };

}

export function getCategories() {
    return async function (dispatch) {
        try {
            var json = await axios.get("https://pf-car-shop.herokuapp.com/categories");
            return dispatch({
                type: "GET_CATEGORIES",
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    };

}
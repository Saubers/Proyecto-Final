import axios from 'axios';

//Traemos al payload todos los autos
export function getCars() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/products");
        return dispatch({
            type: 'GET_CARS',
            payload: json.data
        })
    }
}

export function getOrder() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/orders");
        return dispatch({
            type: 'GET_ORDERS',
            payload: json.data
        })
    }
}


export function getOrderByUsuario() {
    const id = '615dc2f5f1a17cca9b833c49'
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/users/"+id+"/orders");
        return dispatch({
            type: 'GET_ORDERS_BY_USUARIO',
            payload: json.data
        })
    }
}

export function getEngine() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/products");
        return dispatch({
            type: 'GET_ENGINE',
            payload: json.data.map(el => el.features.engine)
        })
    }
}

export function getCarDetail(id) {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3002/products/" + id);
        return dispatch({
            type: "GET_CAR_DETAIL",
            payload: json.data
        })
    }
}
export function postProduct(payload) { 
    console.log('id usuario',payload);
    return async function (dispatch) {
        const json = await axios.post("http://localhost:3002/products", payload);
        return dispatch({
            type: 'POST_PRODUCT',
            payload: json
        })
    }
}

export function putProduct(id, payload) {
   
    return async function (dispatch) {
        const json = await axios.put("http://localhost:3002/productsPut/:id" + id, payload);
        return dispatch({
            type: 'PUT_PRODUCT',
            payload: json
        })
    }
}

export function postCategory(payload) {
    return async function (dispatch) {
        const json = await axios.post("http://localhost:3002/categories", payload);
        return dispatch({
            type: 'POST_CATEGORY',
            payload: json
        })
    }
}

export function postCart(payload) {
    console.log('payload', payload, 'SACANDO IDD', payload.user);
    return async function (dispatch) {
        const json = await axios.post("http://localhost:3002/users/" + payload.user + "/cart", payload);
        return dispatch({
            type: 'POST_CART',
            payload: json
        })
    }
}

export function userRegister(payload) {
    return async function (dispatch) {
        const json = await axios.post('http://localhost:3002/register', payload);
        return dispatch({
            type: 'USER_REGISTER',
            payload: json
        })
    }
}

export function loginUser() {
    return async function (dispatch) {
        const json = await axios.post('http://localhost:3002/login');
        return dispatch({
            type: 'USER_LOGIN',
            payload: json
        })
    }
}

export function DeleteCar(id) {

    return async function (dispatch) {
        var json = await axios.delete("http://localhost:3002/productsDelete/:id" + id);
        return dispatch({
            type: "DELETE_CAR",
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
            var json = await axios.get("http://localhost:3002/searchCars?name=" + name);
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
            var json = await axios.get("http://localhost:3002/searchbrand?brand=" + name, {

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
            var json = await axios.get("http://localhost:3002/categories");
            return dispatch({
                type: "GET_CATEGORIES",
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    };

}
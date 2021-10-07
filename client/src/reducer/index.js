const initialState = {
    cars: [],
    allCars: [],
    carDetail:[],
    engine:[],
    kilometraje:[],
    users:[],
    allcategories:[],
    cart:[],
    idCar:[]
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case 'GET_CARS':
            return{
                ...state,
                cars: action.payload,
                allCars : action.payload,
                kilometraje : action.payload
            }
        case 'GET_ENGINE':
            return{
                ...state,
                engine: action.payload
            }
        case 'GET_NAME_CARS':
            return{
                ...state,
                cars:action.payload,
            }

        //CARRITO
        case 'POST_CART':
            return{
                ...state,
            }
        case 'GET_USER_ORDER':
            return{
                ...state,
                cart: newCar
            }
        case 'ID_CAR':
            const newCar = state.allCars.find(el => el._id === action.payload)
            console.log('ACA',newCar);
            return{
                ...state,
                idCar: newCar
            }

        case 'GET_BRAND_CARS':
            return{
                ...state,
                cars:action.payload,
            }
        case 'GET_CAR_DETAIL':
            return{
                ...state,
                carDetail: action.payload
            }
        case 'POST_PRODUCT':
            return{
                ...state,
            }
        case 'USER_REGISTER':
            return{
                ...state,
                users: action.payload
            }
        case 'USER_AUTH':
            return{
                ...state,
                users: action.payload
            }
        case 'FILTER_BY_KM':
            let km = []
                if(action.payload === 'All'){
                     km = state.allCars
                }
            
            if(action.payload === '0'){
                 km = state.allCars.filter(el => el.features.mileage === 0 )
            }
            if(action.payload === '0-10'){

                 km = state.allCars.filter(el =>(el.features.mileage > 0 && el.features.mileage <= 10000 ))
            }
            if(action.payload === '10-40'){
                 km = state.allCars.filter(el =>( el.features.mileage > 10000  && el.features.mileage <= 40000 ))
            }
            if(action.payload === '40-80'){
                 km = state.allCars.filter(el =>(el.features.mileage >  40000 && el.features.mileage <= 80000 ))
            }
            if(action.payload === '80-110'){
                 km = state.allCars.filter(el => ( el.features.mileage > 80000 && el.features.mileage <= 110000 ))
            }
            if(action.payload === '110-150'){
                 km = state.allCars.filter(el =>( el.features.mileage >110000 && el.features.mileage <= 150000 ))
            }
            //(a && b) || c || d
            if(action.payload === '+150'){
                 km = state.allCars.filter(el =>  el.features.mileage > 150000)
            }
            
            return{
                ...state,
                cars: km,
                kilometraje: km
            }
        case 'FILTER_BY_PRICE':
            
            let money = action.payload === "max" ?
                state.cars.sort((a,b)=>{
                    if(a.price > b.price){
                        return -1;
                    }
                    if(a.price < b.price){
                        return 1;
                    }
                    return 0;
                }) :
                state.cars.sort((a,b)=>{
                    if(a.price > b.price){
                        return 1;
                    }
                    if(a.price < b.price){
                        return -1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    cars: money
                }
        case 'FILTER_BY_TRACTION':
        let filterTraction = []
        if(action.payload === 'All'){
        filterTraction = state.kilometraje
        }
        if(action.payload === 'FWD'){
        
        filterTraction = state.kilometraje.filter(el => el.features.traction === 'FWD')
        }
        if(action.payload === 'RWD'){
        filterTraction = state.kilometraje.filter(el => el.features.traction === 'RWD')
        }
        if(action.payload === 'AWD'){
        filterTraction = state.kilometraje.filter(el => el.features.traction === 'AWD')
        }
        return{
        ...state,
        cars: filterTraction
    }
        case 'FILTER_BY_TRANSMISSION':
            let filterTransmission = []
            if(action.payload === 'All')
            filterTransmission = state.cars
            if(action.payload === 'manual'){
                filterTransmission = state.kilometraje.filter(el => el.features.transmission.hasOwnProperty('manual'))
            }
            if(action.payload === 'automatic'){
                filterTransmission = state.kilometraje.filter(el => el.features.transmission.hasOwnProperty('automatic'))
            }
            return{
                ...state,
                cars: filterTransmission
            }
        case 'FILTER_BY_AGE':
            let modelFilter = []
            if(action.payload === 'All'){
                modelFilter = state.kilometraje
            }   
        if(action.payload === '-2000'){

            modelFilter = state.kilometraje.filter(el =>(el.model < 2000))
        }
        if(action.payload === '2000-2005'){
            modelFilter = state.kilometraje.filter(el =>( el.model >= 2000 && el.model <= 2005 ))
        }
        if(action.payload === '2006-2010'){
            modelFilter = state.kilometraje.filter(el =>(el.model >=  2006 && el.model <= 2010))
        }
        if(action.payload === '2011-2015'){
            modelFilter = state.kilometraje.filter(el => ( el.model >=  2011 && el.model <= 2015 ))
        }
        if(action.payload === '2016-2020'){
            modelFilter = state.kilometraje.filter(el =>(  el.model >= 2016 && el.model <= 2020 ))
        }
        if(action.payload === '+2021'){
            modelFilter = state.kilometraje.filter(el =>( el.model  >= 2021 ))
        }
        //(a && b) || c || d
        return{
            ...state,
            cars: modelFilter
        }
        case 'GET_CATEGORIES':
            return{
                ...state,
                allcategories : action.payload
            }
           case "DELETE_CAR": 
                return{
                ...state,
            }
    default:
        return state;
    }
}
export default rootReducer;
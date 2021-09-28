const initialState = {
    cars = [],
    allCars = []
}

function rootReducer (state = initialState, action) {
    switch(action.type){
    case 'GET_CARS':
        return{
            ...state,
            cars: action.payload,
            allCars : action.payload
        }
    case 'FILTER_BY_ENGINE':
        const filterState = action.payload === 'All' ? state.cars : state.cars.filter(el => el.motor === action.payload)
        return{
            ...state,
            cars = filterState
        }
    case 'FILTER_BY_KM':
        if(action.payload === 'all'){
        const km = cars
        }
        const km = action.payload === 'max' ? state.paises.sort((a,b) => a.poblacion - b.poblacion) :
        state.paises.sort((a,b) => b.poblacion - a.poblacion)
        return{
            ...state,
            paises: km
        }
    case 'FILTER_BY_PRICE':
    case 'FILTER_BY_TRACTION':
    case 'FILTER_BY_TRANSMISSION':
    case 'FILTER_BY_AGE':

default:
    return state;
}}
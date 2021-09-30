const initialState = {
    cars: [],
    allCars: [],
    carDetail:[],
    engine:[]
}

function rootReducer (state = initialState, action) {
    switch(action.type){
        case 'GET_CARS':
            return{
                ...state,
                cars: action.payload,
                allCars : action.payload,
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
        case 'GET_CAR_DETAIL':
            return{
                ...state,
                carDetail: action.payload
            }
        case 'FILTER_BY_ENGINE':
            // const prueba = state.engine
            // console.log('action', action.payload);
            // const filterState = action.payload === 'All' ? state.allCars :
            // state.engine.filter(filtrarPorName())
            // console.log(filterState);
            return{
                ...state,
                cars: filterState
            }
        case 'FILTER_BY_KM':
            if(action.payload === 'all'){
            let km = state.cars
            
            if(action.payload === '0'){
                const km1 = state.cars.filter(el => el.features.milage === 0 )
            }
            if(action.payload === '0-10'){

                const km2 = state.cars.filter(el => 0< el.features.milage <= 10000 )
            }
            if(action.payload === '10-40'){
                const km3 = state.cars.filter(el => 10000 < el.features.milage <= 40000 )
            }
            if(action.payload === '40-80'){
                const km4 = state.cars.filter(el => 40000< el.features.milage <= 80000 )
            }
            if(action.payload === '80-110'){
                const km5 = state.cars.filter(el => 80000< el.features.milage <= 110000 )
            }
            if(action.payload === '110-150'){
                const km6 = state.cars.filter(el => 110000< el.features.milage <= 150000 )
            }
            if(action.payload === '+150'){
                const km7 = state.cars.filter(el => 150000< el.features.milage)
            }
            return{
                ...state,
                cars: km
            }
        }
        case 'FILTER_BY_PRICE':
            if(action.payload === 'all'){
                const price = state.cars
                }
                const price = action.payload === 'max' ? state.cars.sort((a,b) => a.price - b.price) :
                state.cars.sort((a,b) => b.price - a.price)
                return{
                    ...state,
                    cars: price
                }

        case 'FILTER_BY_TRACTION':
        case 'FILTER_BY_TRANSMISSION':
        case 'FILTER_BY_AGE':

    default:
        return state;
}}

export default rootReducer;
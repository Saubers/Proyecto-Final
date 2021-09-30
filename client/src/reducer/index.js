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
            // return{
            //     ...state,
            //     cars: filterState
            // }
            case 'FILTER_BY_KM':
                let km = []
                if(action.payload === 'All'){
                     km = state.allCars
                }
            
            if(action.payload === '0'){
                 km = state.allCars.filter(el => el.features.mileage === 0 )
            }
            if(action.payload === '0-10'){

                 km = state.allCars.filter(el =>(el.features.mileage < 0 && el.features.mileage <= 10000 ))
            }
            if(action.payload === '10-40'){
                 km = state.allCars.filter(el =>( el.features.mileage < 10000  && el.features.mileage <= 40000 ))
            }
            if(action.payload === '40-80'){
                 km = state.allCars.filter(el =>(el.features.mileage <  40000 && el.features.mileage <= 80000 ))
            }
            if(action.payload === '80-110'){
                 km = state.allCars.filter(el => ( el.features.mileage < 80000 && el.features.mileage <= 110000 ))
            }
            if(action.payload === '110-150'){
                 km = state.allCars.filter(el =>( el.features.mileage <110000 && el.features.mileage <= 150000 ))
            }
            //(a && b) || c || d
            if(action.payload === '+150'){
                 km = state.allCars.filter(el =>  el.features.mileage > 150000)
            }
            return{
                ...state,
                cars: km
            }
        case 'FILTER_BY_PRICE':
            let money = action.payload === "max" ?
                state.allCars.sort((a,b)=>{
                    if(a.name > b.name){
                        return 1;
                    }
                    if(a.name < b.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.allCars.sort((a,b)=>{
                    if(a.name > b.name){
                        return -1;
                    }
                    if(a.name < b.name){
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    allCars: money
                
                }
            
            // if(action.payload === 'all'){
            //     const price = state.cars
            //     }
            //     const price = action.payload === 'max' ? state.cars.sort((a,b) => a.price - b.price) :
            //     state.cars.sort((a,b) => b.price - a.price)
            //     return{
            //         ...state,
            //         cars: price
            //     }

        case 'FILTER_BY_TRACTION':
        case 'FILTER_BY_TRANSMISSION':
        case 'FILTER_BY_AGE':

    default:
        return state;
}}

export default rootReducer;
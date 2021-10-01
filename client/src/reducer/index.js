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
            let filterEngine = []
            // console.log(action.payload)
            // const engines = state.allCars.map(el => el.features.engine.map(el => el.name))
            // const nameEngines = []
            // engines.forEach(function(element) {
            //    element.forEach(function(element2){
            //     if (element2 !== undefined) {
            //     nameEngines.push(element2)   
            // }})})
        //     if(action.payload === 'All'){
               filterEngine =   state.allCars 
        //    }
        //    /////////////////////////////////
        //    let i = 0
        //     do {
        //     if(nameEngines[i] === action.payload ){
        //         filterEngine = state.allCars.filter(el => el.features.engine.name === action.payload)
        //     }
        //     i++
        //  while (nameEngines[i] !== action.payload){
        //      if(nameEngines[i] === action.payload){
        //          filterEngine = state.allCars.filter(el => el.features.engine.name === action.payload)
        //     }
        //     i = i+ 1
        // }
            return{
                 ...state,
                cars: filterEngine
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
                cars: km
            }
        case 'FILTER_BY_PRICE':
            let money = action.payload === "max" ?
                state.allCars.sort((a,b)=>{
                    if(a.price > b.price){
                        return -1;
                    }
                    if(a.price < b.price){
                        return 1;
                    }
                    return 0;
                }) :
                state.allCars.sort((a,b)=>{
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
        let filterTraction = []
        if(action.payload === 'All'){
        filterTraction = state.allCars
        }
        if(action.payload === 'FWD'){
        filterTraction = state.allCars.filter(el => el.features.traction === 'FWD')
        }
        if(action.payload === 'RWD'){
        filterTraction = state.allCars.filter(el => el.features.traction === 'RWD')
        }
        if(action.payload === 'AWD'){
        filterTraction = state.allCars.filter(el => el.features.traction === 'AWD')
        }
        return{
        ...state,
        cars: filterTraction
    }
        case 'FILTER_BY_TRANSMISSION':
            let filterTransmission = []
            console.log(action.payload)
            
            if(action.payload === 'All')
            filterTransmission = state.allCars
            if(action.payload === 'manual'){
                filterTransmission = state.allCars.filter(el => el.features.transmission.hasOwnProperty('manual'))
            }
            if(action.payload === 'automatic'){
                filterTransmission = state.allCars.filter(el => el.features.transmission.hasOwnProperty('automatic'))
            }
            return{
                ...state,
                cars: filterTransmission
            }
        case 'FILTER_BY_AGE':
            let modelFilter = []
            if(action.payload === 'All'){
                modelFilter = state.allCars
            }
        
        if(action.payload === '2000'){
            modelFilter = state.allCars.filter(el => el.features.model >= 2000 )
        }
        if(action.payload === '-2000'){

            modelFilter = state.allCars.filter(el =>(el.features.model > 2000 && el.features.model <= 2005 ))
        }
        if(action.payload === '2000-2005'){
            modelFilter = state.allCars.filter(el =>( el.features.mileage > 2006  && el.features.mileage <= 2010 ))
        }
        if(action.payload === '2006-2010'){
            modelFilter = state.allCars.filter(el =>(el.features.mileage >  2011 && el.features.mileage <= 2015 ))
        }
        if(action.payload === '2011-2015'){
            modelFilter = state.allCars.filter(el => ( el.features.mileage > 2016 && el.features.mileage <= 2021 ))
        }
        if(action.payload === '2016-2020'){
            modelFilter = state.allCars.filter(el =>( el.features.mileage  <= 2021 ))
        }
        if(action.payload === '+2021'){
            modelFilter = state.allCars.filter(el =>( el.features.mileage  > 2021 ))
        }
        //(a && b) || c || d

        return{
            ...state,
            cars: modelFilter
        }

    default:
        return state;
}}

export default rootReducer;
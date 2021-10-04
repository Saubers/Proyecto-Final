const initialState = {
    cars: [],
    allCars: [],
    carDetail:[],
    engine:[],
    kilometraje:[],
    allcategories:[]
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
                const stateafiltrar = state.allCars
                switch(action.payload){
                    case "All":
                        return{
                            ...state,
                            cars:stateafiltrar
                        }
                    case "0":
                        const filtrado1 = stateafiltrar.filter(el => el.features.mileage === 0)
                        return{
                            ...state,
                            cars: filtrado1
                        }
                    case "0-10":
                        const filtrado2 = stateafiltrar.filter(el => el.features.mileage > 0 && el.features.mileage <= 10000)
                        return{
                            ...state,
                            cars: filtrado2
                        }
                    case "10-40":
                        const filtrado3 = stateafiltrar.filter(el => el.features.mileage > 10000 && el.features.mileage <= 40000)
                        return{
                            ...state,
                            cars: filtrado3
                        }
                    case "40-80":
                        const filtrado4 = stateafiltrar.filter(el => el.features.mileage > 40000 && el.features.mileage <= 80000)
                        return{
                            ...state,
                            cars: filtrado4
                        }   
                
                    case "80-110":
                        const filtrado5 = stateafiltrar.filter(el => el.features.mileage > 80000 && el.features.mileage <= 110000)
                        return{
                            ...state,
                            cars: filtrado5
                        }  

                    case "110-150":
                        const filtrado6 = stateafiltrar.filter(el => el.features.mileage > 110000 && el.features.mileage <= 150000)
                        return{
                            ...state,
                            cars: filtrado6
                        }  

                    case "+150":
                        const filtrado7 = stateafiltrar.filter(el => el.features.mileage > 150000 )
                        return{
                            ...state,
                            cars: filtrado7
                        }  
                    default:
                        return{
                            ...state,
                        }
                }
            // let km = []
            //     if(action.payload === 'All'){
            //          km = state.allCars
            //     }
            
            // if(action.payload === '0'){
            //      km = state.cars.filter(el => el.features.mileage === 0 )
            // }
            // if(action.payload === '0-10'){

            //      km = state.cars.filter(el =>(el.features.mileage > 0 && el.features.mileage <= 10000 ))
            // }
            // if(action.payload === '10-40'){
            //      km = state.cars.filter(el =>( el.features.mileage > 10000  && el.features.mileage <= 40000 ))
            // }
            // if(action.payload === '40-80'){
            //      km = state.cars.filter(el =>(el.features.mileage >  40000 && el.features.mileage <= 80000 ))
            // }
            // if(action.payload === '80-110'){
            //      km = state.cars.filter(el => ( el.features.mileage > 80000 && el.features.mileage <= 110000 ))
            // }
            // if(action.payload === '110-150'){
            //      km = state.cars.filter(el =>( el.features.mileage >110000 && el.features.mileage <= 150000 ))
            // }
            // //(a && b) || c || d
            // if(action.payload === '+150'){
            //      km = state.cars.filter(el =>  el.features.mileage > 150000)
            // }
            
            return{
                ...state,
                kilometraje: stateafiltrar,
                
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
        console.log(state.kilometraje)
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
                filterTransmission = state.cars.filter(el => el.features.transmission.hasOwnProperty('manual'))
            }
            if(action.payload === 'automatic'){
                filterTransmission = state.cars.filter(el => el.features.transmission.hasOwnProperty('automatic'))

                filterTransmission = state.kilometraje.filter(el => el.features.transmission.hasOwnProperty('manual'))
            }
            if(action.payload === 'automatic'){
                filterTransmission = state.kilometraje.filter(el => el.features.transmission.hasOwnProperty('automatic'))
            }
            return{
                ...state,
                cars :filterTransmission
            }
            case 'FILTER_BY_AGE':
            let modelFilter = []
            if(action.payload === 'All'){
                modelFilter = state.cars
            }
        if(action.payload === '2000'){
            modelFilter = state.kilometraje.filter(el => el.features.model >= 2000 )
        }
        if(action.payload === '-2000'){

            modelFilter = state.kilometraje.filter(el =>(el.features.model > 2000 && el.features.model <= 2005 ))
        }
        if(action.payload === '2000-2005'){
            modelFilter = state.kilometraje.filter(el =>( el.features.mileage > 2006  && el.features.mileage <= 2010 ))
        }
        if(action.payload === '2006-2010'){
            modelFilter = state.kilometraje.filter(el =>(el.features.mileage >  2011 && el.features.mileage <= 2015 ))
        }
        if(action.payload === '2011-2015'){
            modelFilter = state.kilometraje.filter(el => ( el.features.mileage > 2016 && el.features.mileage <= 2021 ))
        }
        if(action.payload === '2016-2020'){
            modelFilter = state.kilometraje.filter(el =>( el.features.mileage  <= 2021 ))
        }
        if(action.payload === '+2021'){
            modelFilter = state.kilometraje.filter(el =>( el.features.mileage  > 2021 ))
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
}}

export default rootReducer;
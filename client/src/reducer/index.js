const initialState = {
  cars: [],
  allCars: [],
  carDetail: [],
  engine: [],
  kilometraje: [],
  users: [],
  userInfo: [],
  allcategories: [],
  cart: [],
  orders: [],
  allOrders: [],
  orderDetail:[],
  review: [],
  userState: [],
  MPLink: ''
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CARS":
      return {
        ...state,
        cars: action.payload,
        allCars: action.payload,
        kilometraje: action.payload,
      };
    case "GET_ENGINE":
      return {
        ...state,
        engine: action.payload,
      };
    case "GET_NAME_CARS":
      return {
        ...state,
        cars: action.payload,
      };
    case "GET_ALL_ORDERS_STATUS":
      return {
        ...state,
        orders: action.payload,
        allOrders:action.payload
      }
      case "GET_ORDERS":
        return {
          ...state,
          orders: action.payload,  
          allOrders:action.payload

        };
      case "GET_ORDERS_USER_STATUS":
        const ordersStatus = action.payload.map(element => element.publication[0])
      return {
        ...state,
        orders: ordersStatus,
      };
    case "GET_ORDERS_BY_USUARIO":
    console.log('Getorders',action.payload)  
    return {
        ...state,
        orders: action.payload,
      };
    case "LIST_CARD":
      return {
        ...state,
        cart: action.payload,
      };
    case "GET_BRAND_CARS":
      return {
        ...state,
        cars: action.payload,
      };
    case "GET_CAR_DETAIL":
      return {
        ...state,
        carDetail: action.payload,
      };
    case "GET_REVIEW":
      return {
        ...state,
        review: action.payload,
      };
    case "GET_ORDERS_BY_ID":
    return{
      ...state,
      orderDetail : action.payload
    }
    case "USER_SIGNIN_REQUEST":
      return {
        loading: true,
      };
    case "USER_SIGNIN_SUCCESS":
      return {
        loading: false,
        userInfo: action.payload,
      };
    case "USER_SIGNIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "USER_SIGNOUT":
      return {

      };
      case 'DELETE_USER':
        return{
          userState: action.payload
        }
    case "USER_DETAILS_REQUEST":
      return { 
        loading: true 
      };
    case "USER_DETAILS_SUCCESS":
      return { 
        loading: false, usersUpdate: action.payload
       };
    case "USER_DETAILS_FAIL":
      return { 
        loading: false, error: action.payload
       };
    case 'USER_UPDATE_PROFILE_RESET':
      return {};  
    case "POST_PRODUCT":
      return {
        ...state,
      };
    case "POST_REVIEW":
      return{
        ...state,
      }
    case "PUT_CART":
        return{
          ...state
        }
    case "PUT_PRODUCT":
      return {
        ...state,
      };
    case "POST_CATEGORY":
      return {
        ...state,
      };
    case "POST_CART":
      return {
        ...state,
      };
    case "POST_MG":
      return {
        ...state,
        MPLink: action.payload
      };
    case "USER_REGISTER":
      return {
        ...state,
        users: action.payload,
      };
    case "SEARCH_ID_ORDER":
        return {
          ...state,
          orders: action.payload.data
        };
    case "FILTER_BY_KM":
      let km = [];
      if (action.payload === "All") {
        km = state.allCars;
      }

      if (action.payload === "0") {
        km = state.allCars.filter((el) => el.features.mileage === 0);
      }
      if (action.payload === "0-10") {
        km = state.allCars.filter(
          (el) => el.features.mileage > 0 && el.features.mileage <= 10000
        );
      }
      if (action.payload === "10-40") {
        km = state.allCars.filter(
          (el) => el.features.mileage > 10000 && el.features.mileage <= 40000
        );
      }
      if (action.payload === "40-80") {
        km = state.allCars.filter(
          (el) => el.features.mileage > 40000 && el.features.mileage <= 80000
        );
      }
      if (action.payload === "80-110") {
        km = state.allCars.filter(
          (el) => el.features.mileage > 80000 && el.features.mileage <= 110000
        );
      }
      if (action.payload === "110-150") {
        km = state.allCars.filter(
          (el) => el.features.mileage > 110000 && el.features.mileage <= 150000
        );
      }
      //(a && b) || c || d
      if (action.payload === "+150") {
        km = state.allCars.filter((el) => el.features.mileage > 150000);
      }

      return {
        ...state,
        cars: km,
        kilometraje: km,
      };
    case "FILTER_BY_PRICE":
      let money =
        action.payload === "max"
          ? state.cars.sort((a, b) => {
              if (a.price > b.price) {
                return -1;
              }
              if (a.price < b.price) {
                return 1;
              }
              return 0;
            })
          : state.cars.sort((a, b) => {
              if (a.price > b.price) {
                return 1;
              }
              if (a.price < b.price) {
                return -1;
              }
              return 0;
            });
      return {
        ...state,
        cars: money,
      };

    case "FILTER_BY_TRACTION":
      let filterTraction = [];
      if (action.payload === "All") {
        filterTraction = state.kilometraje;
      }
      if (action.payload === "FWD") {
        filterTraction = state.kilometraje.filter(
          (el) => el.features.traction === "FWD"
        );
      }
      if (action.payload === "RWD") {
        filterTraction = state.kilometraje.filter(
          (el) => el.features.traction === "RWD"
        );
      }
      if (action.payload === "AWD") {
        filterTraction = state.kilometraje.filter(
          (el) => el.features.traction === "AWD"
        );
      }
      return {
        ...state,
        cars: filterTraction,
      };
    case "FILTER_BY_TRANSMISSION":
      let filterTransmission = [];
      if (action.payload === "All") filterTransmission = state.cars;
      if (action.payload === "manual") {
        filterTransmission = state.kilometraje.filter((el) =>
          el.features.transmission.hasOwnProperty("manual")
        );
      }
      if (action.payload === "automatic") {
        filterTransmission = state.kilometraje.filter((el) =>
          el.features.transmission.hasOwnProperty("automatic")
        );
      }
      return {
        ...state,
        cars: filterTransmission,
      };
    case "FILTER_BY_AGE":
      let modelFilter = [];
      if (action.payload === "All") {
        modelFilter = state.kilometraje;
      }
      if (action.payload === "-2000") {
        modelFilter = state.kilometraje.filter((el) => el.model < 2000);
      }
      if (action.payload === "2000-2005") {
        modelFilter = state.kilometraje.filter(
          (el) => el.model >= 2000 && el.model <= 2005
        );
      }
      if (action.payload === "2006-2010") {
        modelFilter = state.kilometraje.filter(
          (el) => el.model >= 2006 && el.model <= 2010
        );
      }
      if (action.payload === "2011-2015") {
        modelFilter = state.kilometraje.filter(
          (el) => el.model >= 2011 && el.model <= 2015
        );
      }
      if (action.payload === "2016-2020") {
        modelFilter = state.kilometraje.filter(
          (el) => el.model >= 2016 && el.model <= 2020
        );
      }
      if (action.payload === "+2021") {
        modelFilter = state.kilometraje.filter((el) => el.model >= 2021);
      }
      //(a && b) || c || d
      return {
        ...state,
        cars: modelFilter,
      };
    //filtrado OrderDetail
    case 'FILTER_STATUS':
    let filterStatus = []
    console.log("State AllOrders",state.allOrders);
    if (action.payload === "proceso") {
      filterStatus = state.allOrders?.filter((el) => el.state === "En proceso")
    }
    if (action.payload === "cancelada") {
      filterStatus = state.allOrders?.filter((el) => el.state === "Cancelada")
    }
    if (action.payload === "completa") {
      filterStatus = state.allOrders?.filter((el) => el.state === "Completa")
    }
    if (action.payload === "carrito") {
      filterStatus = state.allOrders?.filter((el) => el.state === "Carrito")
    }
    return{
      ...state,
      orders:filterStatus
    }
    case "GET_CATEGORIES":
      return {
        ...state,
        allcategories: action.payload,
      };
    case "DELETE_CAR":
      return {
        ...state,
      };
    case "DELETE_CART_BY_ID":
      return {
        ...state,
      };
    default:
      return state;
  }
}
export default rootReducer;

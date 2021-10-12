import	{createStore,applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')): null
    }
}

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))
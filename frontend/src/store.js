import { combineReducers, applyMiddleware } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({ users: []  }) 
const initialState = {} 
const middleware = [thunk] 
const reducerSlice = createSlice({ 
    name: 'store', initialState: {}, 
    reducers: combineReducers({}) }) 

const store = configureStore({     
    reducer: {       
        someReducer: reducerSlice.reducer,     
    }}) 

// const store = createStore(   
//     reducer,   
//     initialState,  
//     composeWithDevTools(applyMiddleware(...middleware))  ) 


export default store
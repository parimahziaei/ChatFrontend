import React, {createContext, useReducer} from "react";
import {  updateChatReducer, updateChatState, userDetailRducer, userDetailState , activChatReducer, activeChatState} from "./reducers";


const reduceReducers = (...reducers) =>(preState, value, ...args  )=>{
    return  reducers.reduce(
        (newState, reducer)=>reducer(newState, value, ...args), preState);
    }

   
const combineReducers = reduceReducers(updateChatReducer,userDetailRducer, activChatReducer );
const initialState = {
    ...updateChatState, 
    ...userDetailState,
    ...activeChatState
}

const store = createContext(initialState)

const {Provider} = store


//reducer is ein interacter oder connection send data to stock oder
const StoreProvider = ({children})=>{
    const [state, dispatch] =  useReducer(combineReducers,initialState);

    return <Provider value={{state, dispatch}}>{children}</Provider>;
};
export {store, StoreProvider };
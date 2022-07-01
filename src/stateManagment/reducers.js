import {updateChatAction, userDetailAction, activeChatAction} from "./actions";

export const updateChatState = {
    chatState : false,
};

export const userDetailState = {
    userDetail : "",
}; 

export const activeChatState = {
    activeChat : null,
}; 

export const userDetailRducer = (state, action)=> {
    if(action.type === userDetailAction){
        console.log("ooo", action.payload)
        return {
            ...state,
            userDetail: action.payload,
        }
    }
    else {
        return state;
    }
}; 

export const updateChatReducer = (state, action) =>{
    if (action.type === updateChatAction ){
        return {
            ...state, 
            chatState: action.payload
        };
    }
    else {
        return state;
    }
};

export const activChatReducer = (state, action)=> {
    if(action.type ===activeChatAction){
        return {
            ...state,
            activeChat: action.payload,
        }
    }
    else {
        return state;
    }
}; 
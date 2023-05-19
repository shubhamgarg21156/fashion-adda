import { ActionTypes } from "../constants/action-types";

const initialState = {products:[],selectedProduct:{}};

export const productReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,selectedProduct:payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
                return {...state,selectedProduct:{}}
        default:
            return state;
    }
};
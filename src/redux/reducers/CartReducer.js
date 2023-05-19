import { ActionTypes } from "../constants/action-types"

const initialState = {products:[]}

export const cartReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case ActionTypes.ADD_CART_PRODUCT:
            if(state.products.filter( o => o.id === payload.id).length === 0)
                return {products:[...state.products,{...payload,"quantity":1}]}
            else
                return state;
        case ActionTypes.INCREASE_PRODUCT_QUANTITY:
            return {products : state.products.map((product) => {
                if(product.id === payload){
                    return { ...product, quantity: product.quantity + 1 };                
                }
                return product;
            })
           }
        case ActionTypes.DECREASE_PRODUCT_QUANTITY:
            return {products : state.products.map((product) => {
                if(product.id === payload && product.quantity > 1){
                    return { ...product, quantity: product.quantity - 1 };                
                }
                return product;
            })
           }
        case ActionTypes.DELETE_PRODUCT_FROM_CART:
            return {
                products: state.products.filter((o) => (o.id !== payload))
            }
        default:
            return state;
    }
}
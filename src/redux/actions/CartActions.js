import { ActionTypes } from "../constants/action-types";

export const addProduct = (product) => {
    return{
        type:ActionTypes.ADD_CART_PRODUCT,
        payload:product
    }
}
export const increaseQuantity = (id) => {
    return{
        type:ActionTypes.INCREASE_PRODUCT_QUANTITY,
        payload:id
    }
}

export const decreaseQuantity = (id) => {
    return{
        type:ActionTypes.DECREASE_PRODUCT_QUANTITY,
        payload:id
    }
}

export const deleteProductFromCart = (id) => {
    return{
        type:ActionTypes.DELETE_PRODUCT_FROM_CART,
        payload:id
    }
}
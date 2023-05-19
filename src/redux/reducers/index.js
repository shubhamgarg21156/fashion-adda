import {combineReducers} from 'redux';
import { productReducer } from './productReducer';
import { cartReducer } from './CartReducer';

const reducers = combineReducers({
    allProducts:productReducer,
    cartProducts:cartReducer
});

export default reducers;
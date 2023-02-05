import { combineReducers } from 'redux';
import cartReducer from "./reducer/cart.js";

export default combineReducers({
    cartStore : cartReducer
})
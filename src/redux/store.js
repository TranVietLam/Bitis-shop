import { combineReducers } from 'redux';
import cartReducer from "./reducer/cart.js";
import { loadingBarReducer } from "react-redux-loading-bar";


export default combineReducers({
    cartStore : cartReducer,
    loadingBar: loadingBarReducer,
})
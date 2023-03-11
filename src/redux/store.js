import { combineReducers } from "redux";
import cartReducer from "./reducer/cart.js";
import productsReducer from "./reducer/products";
import pagination from './reducer/pagination';

export default combineReducers({
  cartStore: cartReducer,
  productsList: productsReducer,
  dataPagination: pagination,
});

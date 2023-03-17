import { combineReducers } from "redux";
import cartReducer from "./reducer/cart.js";
import productsReducer from "./reducer/products";
import pagination from './reducer/pagination';
import categoryReducer from './reducer/category';

export default combineReducers({
  cartStore: cartReducer,
  productsList: productsReducer,
  dataPagination: pagination,
  categoryCode : categoryReducer,
});

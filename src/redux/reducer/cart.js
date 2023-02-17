import {
  BUY_PRODUCT,
  DELETE_PRODUCT,
  LOAD_DATA_LS,
} from "../actions/actionTypes";

const initProduct = {
  product: [],
};

const cartReducer = (state = initProduct, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      const indexOfProduct = state.product.findIndex((currentValue, index) => {
        return currentValue.id === action.payload.id;
      });
      if (indexOfProduct > -1) {
        state.product[indexOfProduct].quantity += 1 ;
        state.product[indexOfProduct].totalPrice =
          Number(state.product[indexOfProduct].price.replace("", "")) *
          Number(state.product[indexOfProduct].quantity);
      } else {
        action.payload.quantity = 1;
        action.payload.totalPrice =
          Number(action.payload.price.replace("$", "")) *
          Number(action.payload.quantity);
        state.product.push(action.payload);
      }
      localStorage.setItem("Product", JSON.stringify(state.product));
      return { ...state };

    case DELETE_PRODUCT:
      const indexOfDeleteProduct = state.product.findIndex(
        (currentValue, index) => {
          return currentValue.id === action.payload.id;
        }
      );
      if (indexOfDeleteProduct > -1) {
        state.product.splice(indexOfDeleteProduct, 1);
      }
      localStorage.setItem("Product", JSON.stringify(state.product));
      return { ...state };
    case LOAD_DATA_LS:
      state.product = JSON.parse(localStorage.getItem("Product")) || [];
      return { ...state };
    default:
      return { ...state };
  }
};

export default cartReducer;

import {
  BUY_PRODUCT,
  DELETE_PRODUCT,
  DELETE_ALL_PRODUCT,
  LOAD_DATA_LS,
  QUANTITY_MINUS,
} from "../actions/actionTypes";

const initProduct = {
  product: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initProduct, action) => {
  switch (action.type) {
    case BUY_PRODUCT: {
      const indexOfProduct = state.product.findIndex((currentValue, index) => {
        return currentValue.id === action.payload.id;
      });
      if (indexOfProduct > -1) {
        state.product[indexOfProduct].quantity += 1;
        state.product[indexOfProduct].totalPrice =
          action.payload.price * action.payload.quantity;
      } else {
        action.payload.quantity = 1;
        action.payload.totalPrice =
          action.payload.price * action.payload.quantity;
        state.product.push(action.payload);
      }
      let total = 0;
      let totalQuantity = 0;
      localStorage.setItem("Product", JSON.stringify(state.product));
      state.product.forEach((item) => {
        if (item.totalPrice > 0) {
          total += item.totalPrice;
        }
        if (item.quantity > 0) {
          totalQuantity += item.quantity;
        }
      });
      return { ...state, totalPrice: total, totalQuantity };
    }

    case DELETE_PRODUCT: {
      const indexOfDeleteProduct = state.product.findIndex(
        (currentValue, index) => {
          return currentValue.id === action.payload.id;
        }
      );
      if (indexOfDeleteProduct > -1) {
        state.product.splice(indexOfDeleteProduct, 1);
      }
      let total = 0;
      let totalQuantity = 0;
      localStorage.setItem("Product", JSON.stringify(state.product));
      state.product.forEach((item) => {
        if (item.totalPrice > 0) {
          total += item.totalPrice;
        }
        if (item.quantity > 0) {
          totalQuantity += item.quantity;
        }
      });
      return { ...state, totalPrice: total, totalQuantity };
    }

    case DELETE_ALL_PRODUCT: {
      localStorage.setItem("Product", JSON.stringify([]));
      return { ...state, product: [], totalPrice: 0, totalQuantity: 0 };
    }

    case LOAD_DATA_LS: {
      state.product = JSON.parse(localStorage.getItem("Product")) || [];
      let total = 0;
      let totalQuantity = 0;
      state.product.forEach((item) => {
        if (item.totalPrice > 0) {
          total += item.totalPrice;
        }
        if (item.quantity > 0) {
          totalQuantity += item.quantity;
        }
      });
      return { ...state, totalPrice: total, totalQuantity };
    }

    case QUANTITY_MINUS: {
      const indexOfProduct = state.product.findIndex((currentValue, index) => {
        return currentValue.id === action.payload.id;
      });
      if (indexOfProduct > -1) {
        if (state.product[indexOfProduct].quantity - 1 <= 0) {
          state.product.splice(indexOfProduct, 1);
        } else {
          state.product[indexOfProduct].quantity -= 1;
          state.product[indexOfProduct].totalPrice =
            Number(state.product[indexOfProduct].price.replace("", "")) *
            Number(state.product[indexOfProduct].quantity);
        }
      }
      let total = 0;
      let totalQuantity = 0;
      localStorage.setItem("Product", JSON.stringify(state.product));
      state.product.forEach((item) => {
        if (item.totalPrice > 0) {
          total += item.totalPrice;
        }
        if (item.quantity > 0) {
          totalQuantity += item.quantity;
        }
      });
      return { ...state, totalPrice: total, totalQuantity };
    }
    default:
      return { ...state };
  }
};

export default cartReducer;

import { FETCH_API } from "../actions/actionTypes";

const initProducts = {
  products: [],
};
const productsReducer = (state = initProducts, action) => {
  switch (action.type) {
    case FETCH_API: {
      if (Array.isArray(action.payload) && action.payload.length > 0) {
        state.products = action.payload;
        
        return { ...state, products: [...action.payload] };
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default productsReducer;

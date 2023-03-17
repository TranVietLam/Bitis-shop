import { FETCH_CATEGORY } from "./../actions/actionTypes";

const initCategory = {
  category: [],
};

const categoryReducer = (state = initCategory, action) => {
  switch (action.type) {
    case FETCH_CATEGORY: {
      if (Array.isArray(action.payload) && action.payload.length > 0) {
        state.category = action.payload;

        return { ...state, category: [...action.payload] };
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default categoryReducer;

import { CHANGE_PAGE, CHANGE_LIMIT } from "../actions/actionTypes";

const initPagination = {
  page: 1,
  limit: 8,
};

const pagination = (state = initPagination, action) => {
  switch (action.type) {
    case CHANGE_PAGE: {
        state.page = action.payload;
        return { ...state };
    }

    case CHANGE_LIMIT: {
        state.limit = action.payload;
        return { ...state };
    }
    
    default:
      return { ...state };
  }
};

export default pagination;

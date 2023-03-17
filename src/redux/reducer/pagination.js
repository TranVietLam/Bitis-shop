import {
  CHANGE_PAGE,
  CHANGE_LIMIT,
  HANDLE_NEXT,
  HANDLE_PREV,
} from "../actions/actionTypes";

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
      state.page = 1;
      return { ...state };
    }

    case HANDLE_PREV: {
      state.page -= 1;

      return { ...state };
    }

    case HANDLE_NEXT: {
      state.page += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default pagination;

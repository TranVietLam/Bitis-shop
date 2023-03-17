import { FETCH_CATEGORY, LOAD_DATA_CATEGORY } from './actionTypes';

export const fetchCategory = (infoCategory) => {
    return {
        type : FETCH_CATEGORY,
        payload : infoCategory
    }
}

export const loadDataCategory = () => {
    return {
        type: LOAD_DATA_CATEGORY,
    }
}

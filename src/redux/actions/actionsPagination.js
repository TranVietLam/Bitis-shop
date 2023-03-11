import { CHANGE_PAGE, CHANGE_LIMIT } from "./actionTypes";


export const changePage = (page) => {
    return {
        type : CHANGE_PAGE,
        payload : page
    }
}

export const changeLimit = (limit) => {
    return {
        type : CHANGE_LIMIT,
        payload : limit
    }
}
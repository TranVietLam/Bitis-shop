import { CHANGE_PAGE, CHANGE_LIMIT, HANDLE_PREV, HANDLE_NEXT } from "./actionTypes";


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

export const handlePrev = (page) => {
    return {
        type : HANDLE_PREV,
        payload : page
    }
}

export const handleNext = (page) => {
    return {
        type : HANDLE_NEXT,
        payload : page
    }
}
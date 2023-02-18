import { BUY_PRODUCT, DELETE_PRODUCT, LOAD_DATA_LS, QUANTITY_MINUS } from "./actionTypes"

export const onAddToCart = (infoProduct) => {
    return {
        type : BUY_PRODUCT,
        payload: infoProduct,
    }
}

export const deleteProduct = (infoProduct) => {
    return {
        type : DELETE_PRODUCT,
        payload : infoProduct,  
    }
}

export const loadDataLS = () => {
    return {
        type : LOAD_DATA_LS,
    }
}

export const minusQuantity = (infoProduct) => {
    return {
        type : QUANTITY_MINUS,
        payload : infoProduct,
    }
}

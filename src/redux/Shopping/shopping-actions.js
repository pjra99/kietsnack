import * as actionTypes from './shopping-types';

export const addToCart  = (currentItem) => {
    return {
        type: actionTypes.ADD_TO_CART,
        currentItem: currentItem
    }
}

export const removeFromCart = () => {
    return {
        type: actionTypes.REMOVE_FROM_CART  
    }
}

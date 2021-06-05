import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: 0
}

const shopReducer = (state=INITIAL_STATE, action) => {
switch (actionTypes){
        case actionTypes.ADD_TO_CART:  return {};
        case actionTypes.REMOVE_FROM_CART: return {};
        case actionTypes.ADJUST_QTY: return {};
        case actionTypes.LOAD_CURRENT_ITEM: return {};
        default: return state;
}
}
export default shopReducer
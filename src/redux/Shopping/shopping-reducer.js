import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    currentItem: 0
}

const shopReducer = (state=INITIAL_STATE, action) => {
switch (action.type){
        case actionTypes.ADD_TO_CART:  return {
            ...state,
            currentItem: action.currentItem+1
        };
        case actionTypes.REMOVE_FROM_CART: return {
            ...state,
            currentItem: state.currentItem-1,
        };
        default: return state;
}
}
export default shopReducer
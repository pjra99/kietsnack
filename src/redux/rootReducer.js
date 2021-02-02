import {combineReducers} from 'redux';
import shopReducer from './Shopping/shopping-reducer.js'
const rootReducer = combineReducers({
    shop: shopReducer
});

export default rootReducer;
import {createStore} from 'redux'
import shopReducer from './Shopping/shopping-reducer.js'

const store = createStore(shopReducer);

export default store;
import { combineReducers } from 'redux';
import leftMenuReducer from './leftMenuReducer'

export default combineReducers({
    leftMenu: leftMenuReducer
})
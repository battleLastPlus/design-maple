import { combineReducers } from 'redux';
import leftMenuReducer from './leftMenuReducer'
import rightMenuReducer from './rightMenuReducer'

export default combineReducers({
    leftMenu: leftMenuReducer,
    rightMenu: rightMenuReducer
})
import { combineReducers } from 'redux';
import leftMenuReducer from './leftMenuReducer'
import rightMenuReducer from './rightMenuReducer'
import textReducer from './element/textReducer'

export default combineReducers({
    leftMenu: leftMenuReducer,
    rightMenu: rightMenuReducer,
    textele: textReducer
})
import { combineReducers } from 'redux';
import leftMenuReducer from './leftMenuReducer'
import rightMenuReducer from './rightMenuReducer'
import designElementReducer from './design/designElementReducer'

export default combineReducers({
    leftMenu: leftMenuReducer,
    rightMenu: rightMenuReducer,
    designElement: designElementReducer
})
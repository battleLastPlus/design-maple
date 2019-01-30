import {SHOW_LEFTMENU} from '../actions/type'

const initialState = {
    alias: "",
    isShow: false
}

export default function (state = initialState, action){
    switch(action.type){
        case SHOW_LEFTMENU:
        return {
            ...state,
            alias: action.payload.alias === state.alias ? "" : action.payload.alias,
            isShow: state.alias === "" ? true : state.alias === action.payload.alias ? !state.isShow : state.isShow
        }
        default:
			return state;
    }
}
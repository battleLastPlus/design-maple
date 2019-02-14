import {SHOW_RIGHTMENU} from '../actions/type'

const initialState = {
    alias: "page"
}

export default function (state = initialState, action){
    switch(action.type){
        case SHOW_RIGHTMENU:
        return {
            ...state,
            alias: action.payload.alias
        }
        default:
			return state;
    }
}
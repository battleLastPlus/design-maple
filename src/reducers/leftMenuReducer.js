import {SHOW_LEFTMENU} from '../actions/type'

const initialState = {
    alias: "text",
    isShow: false
}

export default function (state = initialState, action){
    console.log("leftMenuReducer");
    switch(action.type){
        case SHOW_LEFTMENU:
        return {
            ...state,
            isShow: !state.isShow
        }
        default:
			return state;
    }
}
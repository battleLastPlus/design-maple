import {SHOW_LEFTMENU} from './type' 

export const showLeftMenu = (e) => dispatch => {
    dispatch({
        type: SHOW_LEFTMENU,
		payload: {alias: e.target.getAttribute("alias")}
    })
}
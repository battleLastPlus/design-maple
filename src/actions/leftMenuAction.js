import {SHOW_LEFTMENU} from './type' 

export const showLeftMenu = (e) => dispatch => {
    let alias = e.target.getAttribute("alias");
    dispatch({
        type: SHOW_LEFTMENU,
		payload: {alias: alias}
    })
}
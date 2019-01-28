import {SHOW_LEFTMENU} from './type' 

export const showLeftMenu = () => dispatch => {
    console.log("showLeftMenu");
    dispatch({
        type: SHOW_LEFTMENU,
		payload: {alias: "Material"}
    })
}
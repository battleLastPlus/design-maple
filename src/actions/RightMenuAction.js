import {SHOW_RIGHTMENU} from './type' 

export const showRightMenu = (e) => dispatch => {
    console.log("aaaa:"+e.target.value);
    dispatch({
        type: SHOW_RIGHTMENU,
		payload: {alias: e.target.value}
    })
}
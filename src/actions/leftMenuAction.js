import {SHOW_LEFTMENU} from './type' 

export const changeLeftMenu = () => dispatch => {
    console.log("changeLeftMenu");
    dispatch({
        type: SHOW_LEFTMENU,
		payload: {alias: "Material"}
    })
}
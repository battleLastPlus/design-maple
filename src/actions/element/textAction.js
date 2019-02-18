import {ELEMENT_TEXT_ADD} from '../type' 

export const addText = () => dispatch => {
    dispatch({
        type: ELEMENT_TEXT_ADD
    })
}
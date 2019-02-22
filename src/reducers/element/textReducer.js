import {ELEMENT_TEXT_ADD} from '../../actions/type'

import {elementState} from '../state'

const initialState = {
    texts: [],
    text: null,
    maxid : 1
}

const defaultText = {
    alias: "text",
    content: "添加文字",
    fontsize: 12,
    fontspacing: 0,
    lineheight: 0,
    bold: false,
    italic: false,
    color: "#000000",
    align: "left",
    rotate: 0,
    opacity: 0
    
}

export default function (state = elementState.textele, action){
    switch(action.type){
        case ELEMENT_TEXT_ADD:
            let maxid = state.maxid++ ;
            defaultText.maxid = maxid;
            // state.text = defaultText;
            state.texts.push(defaultText);
            return {
                ...state
            }
        default:
			return {...state};
    }
}
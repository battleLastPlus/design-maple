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
            let maxid = state.maxid;
            defaultText.maxid = maxid + 1;
            // state.text = defaultText;
            let texts = state.texts.slice();
            texts.push(defaultText);
            return {
                ...state,
                maxid: maxid + 1,
                texts: texts
            }
        default:
			return {...state};
    }
}
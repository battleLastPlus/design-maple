import {ELEMENT_TEXT_ADD} from '../../actions/type'

const initialState = {
    texts: [],
    text: null,
    maxid : 1
}

export default function (state = initialState, action){
    switch(action.type){
        case ELEMENT_TEXT_ADD:
        console.log("ELEMENT_TEXT_ADD");
            let defaultText = {
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
            let maxid = state.maxid++ ;
            defaultText.maxid = maxid;
            state.text = defaultText;
            state.texts.push(defaultText);
            console.log("defaultText", state.texts);
            return {
                ...state
            }
        default:
			return state;
    }
}
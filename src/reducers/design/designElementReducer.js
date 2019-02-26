import {ELEMENT_TEXT_ADD} from '../../actions/type'

import {designElement, defaultText, designState} from '../../moudels/DesignElementMoudel'

export default function (state = designElement, action){
    switch(action.type){
        case ELEMENT_TEXT_ADD:
            let maxid = state.maxid.textid++;
            defaultText.maxid = maxid;
            console.log("designState.selPage:"+designState.selPage);
            state.page[designState.selPage].textElements.push(defaultText);
            return {
                ...state
            }
        default:
			return {...state};
    }
}
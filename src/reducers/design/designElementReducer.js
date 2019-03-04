import { ELEMENT_TEXT_ADD } from '../../actions/type'

import { designElement, defaultText, designBase } from '../../moudels/DesignMoudel'
import { getDesignElement } from '../../moudels/DesignNormalize'

export default function (state = getDesignElement(designElement), action) {
    switch (action.type) {
        case ELEMENT_TEXT_ADD:
            console.log("state------", state);
            // let maxid = state.maxid.textid++;
            // defaultText.maxid = maxid;
            // console.log("designBase.selPage:"+designBase.selPage);
            // state.page[designBase.selPage].textElements.push(defaultText);
            return {
                ...state
            }
        default:
            return { ...state };
    }
}
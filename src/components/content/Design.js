import React, { Component } from 'react';
import '../../css/Design.css'

import imgUrl from '../../static/images/design.png'

class Design extends Component {
    render() {
        return (
            <div className="design">
                <img src={imgUrl} alt=""/>
            </div>
        );
    }
}

export default Design;
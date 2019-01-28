import React, { Component } from 'react';

import imgUrl from '../../../static/images/111.JPG'

class LeftSectionText extends Component {
    render() {
        return (
            <div className="lefe-section-text">
              Text
              <img style={{width:'20px'}} src={imgUrl}/>
            </div>
        );
    }
}

export default LeftSectionText;
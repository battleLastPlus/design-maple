import React, { Component } from 'react';

import imgUrl from '../../../static/images/111.JPG'

class LeftSectionBackground extends Component {
    render() {
        return (
            <div className="lefe-section-background">
              Background
              <img style={{width:'20px'}} src={imgUrl}/>
            </div>
        );
    }
}

export default LeftSectionBackground;
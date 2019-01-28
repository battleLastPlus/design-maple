import React, { Component } from 'react';

import imgUrl from '../../../static/images/qqq.JPG'

class LeftSectionMaterial extends Component {
    render() {
        return (
            <div className="lefe-section-text">
              material
              <img style={{width: '20px'}} src={imgUrl}/>
            </div>
        );
    }
}

export default LeftSectionMaterial;
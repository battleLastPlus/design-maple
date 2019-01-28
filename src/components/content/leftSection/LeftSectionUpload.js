import React, { Component } from 'react';

import imgUrl from '../../../static/images/111.JPG'

class LeftSectionUpload extends Component {
    render() {
        return (
            <div className="lefe-section-upload">
              Upload
              <img style={{width:'20px'}} src={imgUrl}/>
            </div>
        );
    }
}

export default LeftSectionUpload;
import React, { Component } from 'react';

import page1 from '../../../static/images/design.png'
import page2 from '../../../static/images/test/page2.jpg'

class RightSectionPage extends Component {
    render() {
        return (
            <div className="right-section-page">
              <div className="right-preview">
                <div className="page page-selected">
                    <img src={page1}></img>
                </div>
                <div className="page">
                    <img src={page2}></img>
                </div>
              </div>
            </div>
        );
    }
}

export default RightSectionPage;
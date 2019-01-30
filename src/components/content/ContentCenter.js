import React, { Component } from 'react';
import '../../css/ContentCenter.css'
import Design from './Design'

class ContentCenter extends Component {
    render() {
        return (
            <div className="content-center">
                <Design></Design>
            </div>
        );
    }
}

export default ContentCenter;
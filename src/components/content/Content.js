import React, { Component } from 'react';
import '../../css/Content.css'
import ContentLeft from './ContentLeft'

class Content extends Component {
    render() {
        return (
            <div className="app-content">
                <ContentLeft></ContentLeft>
            </div>
        );
    }
}

export default Content;
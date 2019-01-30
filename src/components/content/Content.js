import React, { Component } from 'react';
import '../../css/Content.css'
import ContentLeft from './ContentLeft'
import ContentCenter from './ContentCenter'

class Content extends Component {
    render() {
        return (
            <div className="app-content">
                <ContentCenter></ContentCenter>
                <ContentLeft></ContentLeft>
            </div>
        );
    }
}

export default Content;
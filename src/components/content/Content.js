import React, { Component } from 'react';
import '../../css/Content.css'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import ContentCenter from './ContentCenter'

class Content extends Component {
    render() {
        return (
            <div className="app-content">
                <ContentCenter></ContentCenter>
                <ContentLeft></ContentLeft>
                <ContentRight></ContentRight>
            </div>
        );
    }
}

export default Content;
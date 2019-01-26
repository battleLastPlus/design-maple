import React, { Component } from 'react';
import '../css/Main.css'

import Header from './Header'
import Content from './content/Content'

class Main extends Component {
    render() {
        return (
            <div className="app-main">
                <Content></Content>
                <Header></Header>
            </div>
        );
    }
}

export default Main;
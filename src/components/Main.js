import React, { Component } from 'react';
import '../css/Main.css'

import Header from './Header'

class Main extends Component {
    render() {
        return (
            <div className="app-main">
                <Header></Header>
            </div>
        );
    }
}

export default Main;
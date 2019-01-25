import React, { Component } from 'react';
import logo from '../static/images/logo.svg';
import '../css/App.css';

import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main></Main>
      </div>
    );
  }
}

export default App;

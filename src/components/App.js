import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../srote';
import logo from '../static/images/logo.svg';
import '../css/App.css';

import Main from './Main'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main></Main>
        </div>
      </Provider>
    );
  }
}

export default App;

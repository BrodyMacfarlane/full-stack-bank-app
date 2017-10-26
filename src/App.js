import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Login from './Components/login/login'
import Private from './Components/private/private'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={Login} exact />
          <Route path='/private' component={Private} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

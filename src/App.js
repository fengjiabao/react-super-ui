import React, { Component } from 'react';
import './App.css';
import ButtonView from './views/buttonView/buttonView'
import IndexView from './views/indexView'
import ToastView from './views/toastView/toastView'
import MessageBox from './views/messageBoxView/messageBoxView'
import Popup from './views/popupView/popupView'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import singleView from './views/selectView/selectView';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/buttonView" component={ButtonView} />
            <Route path="/toastView" component={ToastView} />
            <Route path="/singleView" component={singleView} />
            <Route path="/messageBox" component={MessageBox} />
            <Route path="/popup" component={Popup} />
            <Route path="/" component={IndexView} />
          </Switch>
        </Router>
      </div>
    );
  }
}


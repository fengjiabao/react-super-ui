import React,{Component} from 'react';
import './App.css';
import ButtonView from './views/buttonView/buttonView'
import IndexView from './views/indexView'

import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/buttonView" component={ButtonView}/>
            <Route path="/" component={IndexView}/>
          </Switch>
       </Router>
      </div>
    );
  }
}


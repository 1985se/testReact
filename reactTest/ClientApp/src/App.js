import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/page_components/Home';
import './components/assets/index.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <switch>
              <Route exact path='/' component={Home}/>
          </switch>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Form from './pages/form'
import Result from './pages/result'


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/' component={Form} />
            <Route path='/result' component={Result} />
          </Switch>
        </Router>
      </>
    )
  }
}

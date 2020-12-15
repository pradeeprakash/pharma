import React, { Component } from 'react';
// import {
//   BrowserRouter ,
//   Route,
//   Switch,
//   Redirect,
// } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Drawer from '../components/navigation/navigation';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
         <Switch>
         <Route exact path="/">
          <Redirect to='/dashboard' />
          </Route>
          <Route path="/">
          <Drawer />
          </Route>
          <Route exact path="/stock">
            <Drawer />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routes;

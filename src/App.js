import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route} from "react-router-dom";

import Whether from './components/whether';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/whether/:location' component={Whether} />
      </Router>
    );
  }
}

export default App;
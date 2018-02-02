import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CoderBytePage from './Pages/CoderBytePage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/coderbyte" component={CoderBytePage}/>
        </Router>
      </div>
    );
  }
}

export default App;

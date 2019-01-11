import React, { Component } from 'react';
import NewSubject from './components/newsubject'
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="app">
          <NewSubject />
        </div>
    );
  }
}

export default App;

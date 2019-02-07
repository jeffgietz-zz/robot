import React, { Component } from 'react';
import Grid from './components/Grid'
import Robot from './components/Robot'
import Controls from './components/Controls'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Robot Thingo
        </header>
        <Grid />
        <Robot />
        <Controls />
      </div>
    );
  }
}

export default App;

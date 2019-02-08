import React, { PureComponent } from 'react';
import Grid from './components/Grid'
import Robot from './components/Robot'
import Controls from './components/Controls'
import PlaceForm from './components/PlaceForm'
// import logo from './logo.svg';
import './App.css';

class App extends PureComponent {
  handlePlace = (stuff) => {
    
    console.log('handlePlace')
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          Toy Robot Simulator
        </header>
        <div className='app-body'>
          <Grid height={5} width={5}>
            <Robot posX={0} posY={0} direction='north' />
          </Grid>
          <Controls>
            <PlaceForm handleSubmit={this.handlePlace} />
          </Controls>
        </div>
      </div>
    );
  }
}

export default App;

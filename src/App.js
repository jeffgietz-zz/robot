import React, { PureComponent } from 'react';
import Grid from './components/Grid'
import Robot from './components/Robot'
import Controls from './components/Controls'
import PlaceForm from './components/PlaceForm'

import './App.css';

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      gridX: 5,
      gridY: 5,
      robot: null,
      placeFormVisible: true
    }
  }

  handleAdvance = () => {
    const { gridX, gridY, robot } = this.state
    let changeX = 0
    let changeY = 0
    switch (robot.rotation) {
      case 90:
      case -270:
        changeX = 1
        break;
      case -180:
      case 180:
        changeY = -1
        break;
      case -90:
      case 270:
        changeX = -1
        break;
      case 0:
      default:
        changeY = 1
        break;
    }
    this.setState({
      robot: {
        ...robot,
        posX: this.positionCheck(robot.posX, robot.posX + changeX, gridX - 1),
        posY: this.positionCheck(robot.posY, robot.posY + changeY, gridY - 1),
      } 
    })
  }
  positionCheck = (prevPos, nextPos, maxPos) => {
    if (nextPos < 0 || nextPos > maxPos) {
      return prevPos
    } else {
      return nextPos
    }
  }
  handlePlace = (values) => {
    this.setState({
      robot: {
        rotation: parseInt(values.rotation),
        posX: parseInt(values.posX),
        posY: parseInt(values.posY)
      } 
    })
  }

  handlePlaceToggle = () => {
    this.setState({placeFormVisible: !this.state.placeFormVisible})
  }

  handleLeftClick = () => {
    const { rotation } = this.state.robot
    this.setState({
      robot: {
        ...this.state.robot,
        rotation: (rotation - 90 === -360) ? 0 : rotation - 90
      }
    })
  }

  handleRightClick = () => {
    const { rotation } = this.state.robot
    this.setState({ 
      robot: {
        ...this.state.robot,
        rotation: (rotation + 90 === 360) ? 0 : rotation + 90
      }
    })
  }
  
  render() {
    const { gridX, gridY, robot } = this.state
    return (
      <div className="app">
        <header className="app-header">
          Toy Robot Simulator
        </header>
        <div className='app-body'>
          <Grid height={gridY} width={gridX}>
            {robot && (
              <Robot
                posX={robot.posX}
                posY={robot.posY}
                rotation={robot.rotation}
              />
            )}
          </Grid>
          <Controls
            handleAdvance={this.handleAdvance}
            handleLeftClick={this.handleLeftClick}
            handlePlaceToggle={this.handlePlaceToggle}
            handleRightClick={this.handleRightClick}
          >
            <PlaceForm handleSubmit={this.handlePlace} maxX={gridX-1} maxY={gridY-1} />
          </Controls>
        </div>
      </div>
    );
  }
}

export default App;

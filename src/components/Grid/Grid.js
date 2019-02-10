import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reverse, times } from 'lodash'

// We input Robot to check against it
import Robot from '../Robot'
import './Grid.css'

class Grid extends Component {
  // shouldComponentUpdate(nextProps, nextState) {

  // }
  getRobots = (children) => {
    return React.Children.count(children) > 0 
    ? (React.Children.map(children, child => {
      if(React.isValidElement(child) && child.type === Robot) {
        return child
      }
      }))
    : []
  }
  render() {
    const { children, height, width } = this.props
    // First check for children, then make sure they are robots
    const robots = this.getRobots(children)

    return (
      <div className='grid-wrap'>
        <div className='grid'>
          {times(width, colCount => (
            <div className='grid-col' key={`grid-col-${colCount}`}>
              {reverse(times(height, cellCount => (
                <div className='grid-cell' key={`grid-cell-${cellCount}`}>
                  {robots.map((robot, robotCount) => {
                    // Check if there is a robot in the current row/cell
                    if((robot.props.posX === colCount) && (robot.props.posY === cellCount)) {
                      // Clone react element to add key
                      return React.cloneElement(robot, { key: `robot-${robotCount}` })
                    }
                  })}
                </div>
              )))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Grid.defaultProps = {
  height: 5,
  width: 5
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default Grid
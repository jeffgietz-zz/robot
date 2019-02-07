import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { times } from 'lodash'

import './Grid.css'

class Grid extends PureComponent {
  render() {
    const { height, width } = this.props
    return (
      <div className='grid-wrap'>
        <div className='grid'>
          {times(width, i => (
            <div className='grid-col' key={`grid-col-${i}`}>
              {times(height, j => (
                <div className='grid-cell' key={`grid-cell-${j}`}></div>
              ))}
            </div>
          ))}
        </div>
        {this.props.children}
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
  height: PropTypes.number,
  width: PropTypes.number,
}

export default Grid
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Drone from './drone2.svg'

import './Robot.css'
class Robot extends PureComponent {
  render () {
    return (
      <img
        className='robot'
        src={Drone}
        style={{transform: `rotate(${this.props.rotation}deg)`}}
        alt='drone' />
    )
  }
}

Robot.propTypes = {
  rotation: PropTypes.number.isRequired,
  posX: PropTypes.number.isRequired,
  posY: PropTypes.number.isRequired,
}

export default Robot
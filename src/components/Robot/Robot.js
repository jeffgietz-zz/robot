import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Drone from './drone.svg'

import './Robot.css'

class Robot extends PureComponent {
  render () {
    return <img className='robot' src={Drone} alt='drone' />
  }
}

Robot.propTypes = {
  direction: PropTypes.string,
  posX: PropTypes.number,
  posY: PropTypes.number,
}

export default Robot
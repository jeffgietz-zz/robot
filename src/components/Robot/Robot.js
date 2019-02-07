import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Robot extends PureComponent {
  render () {
    return <div>Robot</div>
  }
}

Robot.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export default Robot
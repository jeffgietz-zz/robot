import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Controls extends PureComponent {
  render () {
    return <div>Controls</div>
  }
}

Controls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export default Controls
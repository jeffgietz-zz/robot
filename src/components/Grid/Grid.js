import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Grid extends PureComponent {
  render() {
    return <div>Grid</div>
  }
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ])
}

export default Grid
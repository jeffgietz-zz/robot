import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg';

import './Controls.css'

class Controls extends PureComponent {
  render () {
    return (
      <div className='controls'>
        <div className='more-controls'>
          {this.props.children}
        </div>
        <div className="button-list">
          <div className="button" onClick={this.props.handlePlaceToggle}>
            <img src={logo} alt='place' />
            Place
          </div>
          <div className="button" onClick={this.props.handleLeftClick}>
            <img src={logo} alt='place' />
            Left
          </div>
          <div className="button" onClick={this.props.handleRightClick}>
            <img src={logo} alt='place' />
            Right
          </div>
          <div className="button" onClick={this.props.handleAdvance}>
            <img src={logo} alt='place' />
            Advance
          </div>
        </div>
      </div>
    )
  }
}

Controls.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  handleAdvance: PropTypes.func,
  handleLeftClick: PropTypes.func,
  handlePlaceToggle: PropTypes.func,
  handleRightClick: PropTypes.func,
}

export default Controls
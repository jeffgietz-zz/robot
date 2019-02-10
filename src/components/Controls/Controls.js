import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg';
import leftArrow from './turn-left-arrow.svg'
import rightArrow from './turn-right-arrow.svg'
import upArrow from './arrow-up.svg'

import './Controls.css'

class Controls extends PureComponent {
  render () {
    return (
      <div className='controls'>
        <div className='more-controls'>
          {this.props.children}
        </div>
        <div className="button-list">
          <div className="button button-place" onClick={this.props.handlePlaceToggle}>
            <img src={logo} alt='place' />
            Place
          </div>
          <div className="button button-left" onClick={this.props.handleLeftClick}>
            <img src={leftArrow} alt='turn left' />
            Left
          </div>
          <div className="button button-up" onClick={this.props.handleAdvance}>
            <img src={upArrow} alt='place' />
            Advance
          </div>
          <div className="button button-right" onClick={this.props.handleRightClick}>
            <img src={rightArrow} alt='turn right' />
            Right
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
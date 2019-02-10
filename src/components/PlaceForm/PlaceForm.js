import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Field, Formik } from 'formik'

import './PlaceForm.css'

class PlaceForm extends PureComponent {
  render () {
    return (
      <Formik
        initialValues={{ posX: '', posY: '', rotation: '0' }}
        onSubmit={(values) => {
          this.props.handleSubmit(values)
        }}
        validate={values => {
          let errors = {};
          const { posX, posY } = values
          if (posX !== 0 && !posX) {
          errors.posX = 'Required';
          } else if (!/^[0-9]+$/.test(posX)) {
            errors.posX = 'Please only use numbers';
          } else if (
            posX > this.props.maxX
          ) {
            errors.posX = 'Placement outside bounds of grid'
          }
          if (posY !== 0 && !posY) {
            errors.posY = 'Required';
          } else if (
            !/^[0-9]+$/.test(posY)
          ) {
            errors.posY = 'Please only use numbers';
          }
          return errors;
        }}
      >
          {({
            values,
            errors,
            touched,
            handleSubmit,
          }) => (
            <form
              className={`placeform ${this.props.visible ? 'visible' : 'hidden'}`}
              onSubmit={handleSubmit}
            >
              <Field
                name='posX'
                render={({ field }) => (
                  <div className='field'>
                    <label htmlFor='posX'>Place Robot X:</label>    
                    <input {...field} placeholder='0' />
                  </div>
                )}
              />
              <Field
                name='posY'
                render={({ field }) => (
                  <div className='field'>
                    <label htmlFor='posY'>Place Robot Y:</label>    
                    <input {...field} placeholder='0' />
                  </div>
                )}
              />
              <Field
                name='rotation'
                render={({ field }) => (
                  <div className='field'>
                    <label htmlFor='rotation'>Direction:</label>    
                    <select name='rotation' {...field}>
                      <option value='0'>North</option>                      
                      <option value="90">East</option>
                      <option value="180">South</option>
                      <option value="270">West</option>
                    </select>
                  </div>
                )}
              />
              <button type="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
    )
  }
}

PlaceForm.defaultProps = {
  visible: true
}

PlaceForm.propTypes = {
  handleSubmit: PropTypes.func,
  visible: PropTypes.bool
}

export default PlaceForm
import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { Field, Formik } from 'formik'

class PlaceForm extends PureComponent {
  
  render () {
    return (
      <Formik
        initialValues={{ posX: '', posY: '' }}
        onSubmit={(values) => {
          this.props.handleSubmit(values)
        }}
        validate={values => {
          console.log('values', values)
          let errors = {};
          if (values.posX !== 0 && !values.posX) {
            errors.posX = 'Required';
          } else if (
            !/^[0-9]+$/.test(values.posX)
          ) {
            errors.posX = 'Please only use numbers';
          }
          if (values.posY !== 0 && !values.posY) {
            errors.posY = 'Required';
          } else if (
            !/^[0-9]+$/.test(values.posY)
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
            <form onSubmit={handleSubmit}>
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
                name='direction'
                render={({ field }) => (
                  <div className='field'>
                    <label htmlFor='direction'>Direction:</label>    
                    <select {...field}>
                      <option value='north'>North</option>                      
                      <option value="east">East</option>
                      <option value="south">South</option>
                      <option value="west">West</option>
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

export default PlaceForm
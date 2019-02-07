import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { Field, Formik } from 'formik'

class PlaceForm extends PureComponent {
  handleSubmit = () => {
    console.log('handle submit')
  }
  render () {
    return (
      <Formik>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={this.handleSubmit}>
              <Field
                name='posX'
                render={({ field /* _form */ }) => (
                  <div className='field'>
                    <label htmlFor='posX'>Place Robot X:</label>    
                    <input {...field} placeholder='0' />
                  </div>
                )}
              />
              <Field
                name='posY'
                render={({ field /* _form */ }) => (
                  <div className='field'>
                    <label htmlFor='posY'>Place Robot Y:</label>    
                    <input {...field} placeholder='0' />
                  </div>
                )}
              />
              <Field
                name='direction'
                render={({ field /* _form */ }) => (
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
            </form>
          )}
        </Formik>
    )
  }
}

export default PlaceForm
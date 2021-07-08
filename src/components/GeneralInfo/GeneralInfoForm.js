import React, { Component } from 'react';
import '../../styles/GeneralInfoStyle.css'

class GeneralInfoForm extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className='generalInfoForm'>
        <form className='formGeneral'>
          <div className='generalInfoInputs'>
            <label htmlFor='firstName'>First Name</label>
            <input onChange={(e) => this.props.handleChange('firstName', e)}
                  type='text'
                  id='firstName'
                  /> 
          </div>

          <div className='generalInfoInputs'>
            <label htmlFor='lastName'>Last Name</label>
            <input onChange={(e) => this.props.handleChange('lastName', e)}
                  type='text'
                  id='lastName'
                  /> 
          </div>

          <div className='generalInfoInputs'>
            <label htmlFor='occupation'>Current occupation</label>
            <input onChange={(e) => this.props.handleChange('occupation', e)}
                  type='text'
                  id='occupation'
                  /> 
          </div>

          <div className='generalInfoInputs'>
            <label htmlFor='address'>Address</label>
            <input onChange={(e) => this.props.handleChange('address', e)}
                  type='text'
                  id='address'
                  /> 
          </div>

          <div className='generalInfoInputs'>
            <label htmlFor='phone'>Phone Number</label>
            <input onChange={(e) => this.props.handleChange('phone', e)}
                  type='text'
                  id='phone'
                  /> 
          </div>

          <div className='generalInfoInputs'>
            <label htmlFor='email'>Email</label>
            <input onChange={(e) => this.props.handleChange('email', e)}
                  type='email'
                  id='email'
                  /> 
          </div>

          <button type='submit' className='buttons generalSaveBtn'>SAVE</button>
        </form>
      </div>
    )
  }
}

export default GeneralInfoForm;

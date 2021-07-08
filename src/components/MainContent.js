import React, { Component } from 'react';
import uniqid from 'uniqid'
import GeneralInfoForm from './GeneralInfo/GeneralInfoForm'

class MainContent extends Component {
   constructor(props) {
     super(props)
     this.state = {
      firstName: '',
      lastName: '',
      occupation: '',
      address: '',
      phone: '',
      email: ''
    }
   }

   
  handlePersonalChange = (field, e) => {
    this.setState(prevState => {
      [field] = e.target.value
    })
    console.log(this.state.generalInfo)
  }

   render() {

     return(
       <div className='mainContent'>
         <div className='generalInfo'>
          <GeneralInfoForm />
         </div>
         <hr/>
       </div>
     )
   }
}

export default MainContent
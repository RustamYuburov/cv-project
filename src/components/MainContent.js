import React, { Component } from 'react';
import uniqid from 'uniqid'
import GeneralInfoForm from './GeneralInfo/GeneralInfoForm'

class MainContent extends Component {
   constructor(props) {
     super(props)
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
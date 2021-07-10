import React, { Component } from 'react';
import uniqid from 'uniqid'
import GeneralInfo from './GeneralInfo/GeneralInfo';
import GeneralInfoForm from './GeneralInfo/GeneralInfoForm'

class MainContent extends Component {
   constructor(props) {
     super(props)
   }

   render() {

     return(
       <div className='mainContent'>
         <div className='generalInfo'>
          <GeneralInfo />
         </div>
         <hr/>
       </div>
     )
   }
}

export default MainContent
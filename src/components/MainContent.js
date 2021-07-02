import React, { Component } from 'react';
import uniqid from 'uniqid'

class MainContent extends Component {
   constructor(props) {
     super(props)
   }

   render() {
     return(
       <div className='mainContent'>
         <p>here's gonna be main content</p>
       </div>
     )
   }
}

export default MainContent
import React, { Component } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import GeneralInfoView from './GeneralInfoView';
class GeneralInfo extends Component {
  constructor(props) {
    super(props);
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
      <div>
        Hello
      </div>
    ) 
  }
}

export default GeneralInfo
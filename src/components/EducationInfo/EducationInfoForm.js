import React, { Component } from 'react';
import uniqid from 'uniqid';

class EducationInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      eduExperience: {
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
    }
  }

  render() {
    return(
      <div className='educationInfoForm'>
        Hello
      </div>
    )
  }
}

export default EducationInfoForm;

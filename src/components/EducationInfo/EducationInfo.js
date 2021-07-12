import React, { Component } from 'react';
import '../../styles/EducationInfoStyle.css'
import GeneralInfoView from '../GeneralInfo/GeneralInfoView';

class EducationInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      educations: [],
    }
  }

  saveEducation = (education) => {
    this.setState({
      educations: this.state.educations.concat(education)
    })
  }

  render() {
    const educationsRenders = this.state.educations.map(education => <GeneralInfoView info={education}/>);

    return(
      <div className='educationInfo'>
        <div className='educationInfoViewDiv'>
          Here's gonna be info view
          {educationsRenders}
        </div>
        <div className='educationInfoFormDiv'>
          Here's gonna be form
        </div>
        <button className='buttons '>Add More</button>
      </div>
    )
  }
}

export default EducationInfo;
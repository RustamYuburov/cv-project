import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../../styles/EducationInfoStyle.css'
import EducationInfoView from './EducationInfoView';
import EducationInfoForm from './EducationInfoForm';

class EducationInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {      
      eduExperience: {
        school: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      },
      educations: [],
      educationForms: []
    }
  }

  saveEducation = (educationId) => {
    this.setState({
      educations: this.state.educations.concat(
        this.state.educationForms.filter(
          educationForms => educationForms.id === educationId
        )),
      educationForms: this.state.educationForms.filter(
        educationForms => educationForms.id !== educationId
      ),
    })
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      educationForms: this.state.educationForms.concat(this.state.eduExperience)
    })
  }

  render() {
    const educationViews = this.state.educations.map(education => <EducationInfoView info={education}/>);
    const educationForms = this.state.educationForms.map(educationForm => <EducationInfoForm info={educationForm}/>);

    return(
      <div className='educationInfo'>
        <div className='educationInfoViewDiv'>
          Here's gonna be info view
          {educationViews}
        </div>
        <div className='educationInfoFormDiv'>
          Here's gonna be form
          {educationForms}
        </div>
        <button onClick={(e) => this.addEducation(e)} className='buttons '>Add More</button>
      </div>
    )
  }
}

export default EducationInfo;
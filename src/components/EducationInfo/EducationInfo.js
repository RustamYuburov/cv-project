import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../../styles/EducationInfoStyle.css'
import EducationInfoView from './EducationInfoView';
import EducationInfoForm from './EducationInfoForm';

class EducationInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {      
      educations: [],
      educationForms: []
    }
  }

  saveEducation = (e, education) => {
    e.preventDefault()
    this.setState({
      educations: this.state.educations.concat(education),
      educationForms: this.state.educationForms.filter(
        educationForms => educationForms.id !== education.id
      ),
    })
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState({
      educationForms: this.state.educationForms.concat({school: '',
                                                        degree: '',
                                                        subject: '',
                                                        startDate: '',
                                                        endDate: '',
                                                        id: uniqid(),
                                                      })
    })
  }

  cancelEducation = (e) => {
    this.setState({
      educationForms: this.state.educationForms.filter(
        education => education.id !== e.target.name
      )
    })
  }

  editEducation = (e) => {
    e.preventDefault();
    let eduInfo = this.state.educations.filter(education => education.id === e.target.name)
    this.setState({
      educationForms: this.state.educationForms.concat(eduInfo),
      educations: this.state.educations.filter(education => education.id !== e.target.name),
    })
    console.log(eduInfo)
  }
  
  deleteEducation = (e) => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.filter(
        education => education.id !== e.target.name
        )
      })
    }
  
    
    render() {
      const educationViews = this.state.educations.map(
                                      education => <EducationInfoView
                                                    info={education} 
                                                    handleDelete={this.deleteEducation}
                                                    handleEdit={this.editEducation}
                                                    key={education.id}
                                                    />
    );
    const educationForms = this.state.educationForms.map(
                                  educationForm => <EducationInfoForm
                                                    saveEdu={this.saveEducation}
                                                    id={educationForm.id}
                                                    handleCancel={this.cancelEducation}
                                                    info={educationForm}
                                                    key={educationForm.id}
                                                    />
    );

    return(
      <div className='educationInfo'>
        <div className='educationInfoViewDiv'>
          {educationViews}
          
        </div>
        <div className='educationInfoFormDiv'>
          {educationForms}
        </div>
        <button onClick={(e) => this.addEducation(e)}
                className='buttons addBtns'>Add More</button>
      </div>
    )
  }
}

export default EducationInfo;
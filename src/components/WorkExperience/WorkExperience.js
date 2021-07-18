import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../../styles/WorkExperienceStyle.css'
import WorkExperienceView from './WorkExperienceView';
import WorkExperienceForm from './WorkExperienceForm';

class WorkExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {      
      experiences: [],
      experienceForms: []
    }
  }

  saveExperience = (e, experience) => {
    e.preventDefault()
    this.setState({
      experiences: this.state.experiences.concat(experience),
      experienceForms: this.state.experienceForms.filter(
        experienceForms => experienceForms.id !== experience.id
      ),
    })
  }

  addExperience = (e) => {
    e.preventDefault();
    this.setState({
      experienceForms: this.state.experienceForms.concat({position: '',
                                                        company: '',
                                                        mainTasks: '',
                                                        startDate: '',
                                                        endDate: '',
                                                        id: uniqid(),
                                                      })
    })
  }

  cancelExperience = (e) => {
    this.setState({
      experienceForms: this.state.experienceForms.filter(
        experience => experience.id !== e.target.name
      )
    })
  }

  editExperience = (e) => {
    e.preventDefault();
    let expInfo = this.state.experiences.filter(experience => experience.id === e.target.name)
    this.setState({
      experienceForms: this.state.experienceForms.concat(expInfo),
      experiences: this.state.experiences.filter(experience => experience.id !== e.target.name),
    })
  }
  
  deleteExperience = (e) => {
    e.preventDefault();
    this.setState({
      experiences: this.state.experiences.filter(
        experience => experience.id !== e.target.name
        )
      })
    }
  
    
    render() {
      const experienceViews = this.state.experiences.map(
                                  experience => <WorkExperienceView
                                                info={experience} 
                                                handleDelete={this.deleteExperience}
                                                handleEdit={this.editExperience}
                                                key={experience.id}
                                                />
    );
    const experienceForms = this.state.experienceForms.map(
                                  experienceForm => <WorkExperienceForm
                                                    saveExp={this.saveExperience}
                                                    id={experienceForm.id}
                                                    handleCancel={this.cancelExperience}
                                                    info={experienceForm}
                                                    key={experienceForm.id}
                                                    />
    );

    return(
      <div className='experienceInfo'>
        <div className='experienceInfoViewDiv'>
          {experienceViews}
          
        </div>
        <div className='experienceInfoFormDiv'>
          {experienceForms}
        </div>
        <button onClick={(e) => this.addExperience(e)}
                className='buttons addBtns'>Add More</button>
      </div>
    )
  }
}

export default WorkExperience;
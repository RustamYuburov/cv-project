import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../../styles/WorkExperienceStyle.css';
import WorkExperienceView from './WorkExperienceView';
import WorkExperienceForm from './WorkExperienceForm';

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: [],
      experienceForms: [],
    };
  }

  handleExpInput = (e, id) => {
    this.setState((prevState) => {
      const { name, value } = e.target;
      const updatedExpForm = prevState.experienceForms.map((forms) => {
        if (forms.id === id) {
          return {
            ...forms,
            [name]: value,
          };
        }
        return forms;
      });

      return {
        ...this.state,
        experienceForms: updatedExpForm,
      };
    });
  };

  saveExperience = (e, id) => {
    e.preventDefault();
    this.setState((prevState) => {
      const experience = prevState.experienceForms.filter(
        (form) => form.id === id
      );
      return {
        experiences: prevState.experiences.concat(experience),
        experienceForms: prevState.experienceForms.filter(
          (experienceForms) => experienceForms.id !== id
        ),
      };
    });
  };

  addExperience = (e) => {
    this.setState({
      experienceForms: this.state.experienceForms.concat({
        position: '',
        company: '',
        mainTasks: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      }),
    });
  };

  cancelExperience = (e) => {
    this.setState((prevState) => {
      const updateExpForm = prevState.experienceForms.filter(
        (experience) => experience.id !== e.target.name
      );
      return {
        ...prevState,
        experienceForms: updateExpForm,
      };
    });
  };

  editExperience = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const expInfo = prevState.experiences.filter(
        (experience) => experience.id === e.target.name
      );
      return {
        experienceForms: prevState.experienceForms.concat(expInfo),
        experiences: prevState.experiences.filter(
          (experience) => experience.id !== e.target.name
        ),
      };
    });
  };

  deleteExperience = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const updatedExp = prevState.experiences.filter(
        (experience) => experience.id !== e.target.name
      );
      return {
        ...prevState,
        experiences: updatedExp,
      };
    });
  };

  render() {
    const experienceViews = this.state.experiences.map((experience) => (
      <WorkExperienceView
        info={experience}
        handleDelete={this.deleteExperience}
        handleEdit={this.editExperience}
        key={experience.id}
      />
    ));
    const experienceForms = this.state.experienceForms.map((experienceForm) => (
      <WorkExperienceForm
        saveExp={this.saveExperience}
        handleCancel={this.cancelExperience}
        handleExpInput={this.handleExpInput}
        info={experienceForm}
        key={experienceForm.id}
      />
    ));

    return (
      <div className="experienceInfo">
        <div className="experienceInfoViewDiv">{experienceViews}</div>
        <div className="experienceInfoFormDiv">{experienceForms}</div>
        <button
          onClick={(e) => this.addExperience(e)}
          className="buttons addBtns"
        >
          Add More
        </button>
      </div>
    );
  }
}

export default WorkExperience;

import React, { Component } from 'react';
import uniqid from 'uniqid';
import '../../styles/EducationInfoStyle.css';
import EducationInfoView from './EducationInfoView';
import EducationInfoForm from './EducationInfoForm';

class EducationInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educations: [],
      educationForms: [],
    };
  }

  handleEduInput = (e, id) => {
    this.setState((prevState) => {
      const { name, value } = e.target;
      const updatedEduForm = prevState.educationForms.map((forms) => {
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
        educationForms: updatedEduForm,
      };
    });
  };

  saveEducation = (e, id) => {
    e.preventDefault();
    this.setState((prevState) => {
      const education = prevState.educationForms.filter(
        (form) => form.id === id
      );
      return {
        educations: prevState.educations.concat(education),
        educationForms: prevState.educationForms.filter(
          (educationForms) => educationForms.id !== id
        ),
      };
    });
  };

  addEducation = () => {
    this.setState({
      educationForms: this.state.educationForms.concat({
        school: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      }),
    });
  };

  cancelEducation = (e) => {
    this.setState((prevState) => {
      const updateEduForm = prevState.educationForms.filter(
        (education) => education.id !== e.target.name
      );
      return {
        ...prevState,
        educationForms: updateEduForm,
      };
    });
  };

  editEducation = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const eduInfo = prevState.educations.filter(
        (education) => education.id === e.target.name
      );
      return {
        educationForms: prevState.educationForms.concat(eduInfo),
        educations: prevState.educations.filter(
          (education) => education.id !== e.target.name
        ),
      };
    });
  };

  deleteEducation = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const updatedEdu = prevState.educations.filter(
        (education) => education.id !== e.target.name
      );
      return {
        ...prevState,
        educations: updatedEdu,
      };
    });
  };

  render() {
    const educationViews = this.state.educations.map((education) => (
      <EducationInfoView
        handleDelete={this.deleteEducation}
        handleEdit={this.editEducation}
        info={education}
        key={education.id}
      />
    ));
    const educationForms = this.state.educationForms.map((educationForm) => (
      <EducationInfoForm
        saveEdu={this.saveEducation}
        handleCancel={this.cancelEducation}
        handleEduInput={this.handleEduInput}
        info={educationForm}
        key={educationForm.id}
      />
    ));

    return (
      <div className="educationInfo">
        <div className="educationInfoViewDiv">{educationViews}</div>
        <div className="educationInfoFormDiv">{educationForms}</div>
        <button onClick={this.addEducation} className="buttons addBtns">
          Add More
        </button>
      </div>
    );
  }
}

export default EducationInfo;

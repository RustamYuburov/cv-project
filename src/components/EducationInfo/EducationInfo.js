import React, { useState } from 'react';
import uniqid from 'uniqid';
import '../../styles/EducationInfoStyle.css';
import EducationInfoView from './EducationInfoView';
import EducationInfoForm from './EducationInfoForm';

const EducationInfo = () => {
  const [educations, setEducations] = useState([]);
  const [educationForms, setEducationForms] = useState([]);

  const handleEduInput = (e, id) => {
    const { name, value } = e.target;
    const updatedEduForm = educationForms.map((form) => {
      if (form.id === id) {
        return {
          ...form,
          [name]: value,
        };
      }
      return form;
    });
    setEducationForms(updatedEduForm);
  };

  const addEducation = () => {
    setEducationForms(
      educationForms.concat({
        school: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      })
    );
  };

  const saveEducation = (e, id) => {
    e.preventDefault();
    const education = educationForms.filter((form) => form.id === id);
    setEducations(educations.concat(education));

    const updatedEduForm = educationForms.filter(
      (educationForms) => educationForms.id !== id
    );
    setEducationForms(updatedEduForm);
  };

  const cancelEducation = (e) => {
    const updateEduForm = educationForms.filter(
      (education) => education.id !== e.target.name
    );
    setEducationForms(updateEduForm);
  };

  const editEducation = (e) => {
    e.preventDefault();
    const eduInfo = educations.filter(
      (education) => education.id === e.target.name
    );
    setEducationForms(educationForms.concat(eduInfo));

    const updatedEdu = educations.filter(
      (education) => education.id !== e.target.name
    );
    setEducations(updatedEdu);
  };

  const deleteEducation = (e) => {
    e.preventDefault();
    const updatedEdu = educations.filter(
      (education) => education.id !== e.target.name
    );
    setEducations(updatedEdu);
  };

  const educationViews = educations.map((education) => (
    <EducationInfoView
      handleDelete={deleteEducation}
      handleEdit={editEducation}
      info={education}
      key={education.id}
    />
  ));
  const educationFormsView = educationForms.map((educationForm) => (
    <EducationInfoForm
      saveEdu={saveEducation}
      handleCancel={cancelEducation}
      handleEduInput={handleEduInput}
      info={educationForm}
      key={educationForm.id}
    />
  ));

  return (
    <div className="educationInfo">
      <div className="educationInfoViewDiv">{educationViews}</div>
      <div className="educationInfoFormDiv">{educationFormsView}</div>
      <button onClick={addEducation} className="buttons addBtns">
        Add More
      </button>
    </div>
  );
};

export default EducationInfo;

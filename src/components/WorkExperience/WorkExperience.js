import React, { useState } from 'react';
import uniqid from 'uniqid';
import '../../styles/WorkExperienceStyle.css';
import WorkExperienceView from './WorkExperienceView';
import WorkExperienceForm from './WorkExperienceForm';

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [experienceForms, setExperienceForms] = useState([]);

  const handleExpInput = (e, id) => {
    const { name, value } = e.target;
    const updatedExpForm = experienceForms.map((form) => {
      if (form.id === id) {
        return {
          ...form,
          [name]: value,
        };
      }
      return form;
    });
    setExperienceForms(updatedExpForm);
  };

  const addExperience = () => {
    setExperienceForms(
      experienceForms.concat({
        school: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
        id: uniqid(),
      })
    );
  };

  const saveExperience = (e, id) => {
    e.preventDefault();
    const experience = experienceForms.filter((form) => form.id === id);
    setExperiences(experiences.concat(experience));

    const updatedEduForm = experienceForms.filter(
      (experienceForms) => experienceForms.id !== id
    );
    setExperienceForms(updatedEduForm);
  };

  const cancelExperience = (e) => {
    const updateEduForm = experienceForms.filter(
      (experience) => experience.id !== e.target.name
    );
    setExperienceForms(updateEduForm);
  };

  const editExperience = (e) => {
    e.preventDefault();
    const eduInfo = experiences.filter(
      (experience) => experience.id === e.target.name
    );
    setExperienceForms(experienceForms.concat(eduInfo));

    const updatedEdu = experiences.filter(
      (experience) => experience.id !== e.target.name
    );
    setExperiences(updatedEdu);
  };

  const deleteExperience = (e) => {
    e.preventDefault();
    const updatedEdu = experiences.filter(
      (experience) => experience.id !== e.target.name
    );
    setExperiences(updatedEdu);
  };

  const experienceViews = experiences.map((experience) => (
    <WorkExperienceView
      info={experience}
      handleDelete={deleteExperience}
      handleEdit={editExperience}
      key={experience.id}
    />
  ));
  const experienceFormsView = experienceForms.map((experienceForm) => (
    <WorkExperienceForm
      saveExp={saveExperience}
      handleCancel={cancelExperience}
      handleExpInput={handleExpInput}
      info={experienceForm}
      key={experienceForm.id}
    />
  ));

  return (
    <div className="experienceInfo">
      <div className="experienceInfoViewDiv">{experienceViews}</div>
      <div className="experienceInfoFormDiv">{experienceFormsView}</div>
      <button onClick={(e) => addExperience(e)} className="buttons addBtns">
        Add More
      </button>
    </div>
  );
};

export default WorkExperience;

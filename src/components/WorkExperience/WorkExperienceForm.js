import React from 'react';

const ExperienceInfoForm = (props) => {
  const { position, company, mainTasks, startDate, endDate, id } = props.info;

  return (
    <div className="experienceInfoForm">
      <form
        onSubmit={(e) => {
          props.saveExp(e, id);
        }}
        className="formExperience"
      >
        <div className="experienceInfoInputs">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={position}
            onChange={(e) => props.handleExpInput(e, id)}
            required
          />
        </div>

        <div className="experienceInfoInputs">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={company}
            onChange={(e) => props.handleExpInput(e, id)}
            required
          />
        </div>

        <div className="experienceInfoInputs">
          <label htmlFor="mainTasks">Main tasks and responsibilities</label>
          <input
            type="text"
            id="mainTasks"
            name="mainTasks"
            value={mainTasks}
            onChange={(e) => props.handleExpInput(e, id)}
            required
          />
        </div>

        <div className="experienceInfoInputs">
          <label htmlFor="startDate">From</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => props.handleExpInput(e, id)}
            required
          />
        </div>

        <div className="experienceInfoInputs">
          <label htmlFor="endDate">To</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => props.handleExpInput(e, id)}
            required
          />
        </div>

        <div>
          <button type="submit" className="buttons saveExpInfoBtn">
            Save
          </button>
        </div>
      </form>
      <button
        name={id}
        onClick={(e) => props.handleCancel(e)}
        className="buttons cancelExpInfoBtn"
      >
        Cancel
      </button>
    </div>
  );
};

export default ExperienceInfoForm;

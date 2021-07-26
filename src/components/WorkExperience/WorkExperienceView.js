import React from 'react';

const ExperienceInfoView = (props) => {
  const { position, company, mainTasks, id, startDate, endDate } = props.info;

  return (
    <div key={id} className="experienceInfoView">
      <div>
        <div className="experienceInfoViews">
          <b>Position</b>: {position}
        </div>
        <div className="experienceInfoViews">
          <b>Company name</b>: {company}
        </div>
        <div className="experienceInfoViews">
          <b>Main tasks and responsibilities</b>: {mainTasks}
        </div>
        <div className="experienceInfoViews">
          <b>Start Date</b>: {startDate}
        </div>
        <div className="experienceInfoViews">
          <b>End Date</b>: {endDate}
        </div>
      </div>

      <div>
        <button
          name={id}
          onClick={(e) => props.handleEdit(e)}
          className="buttons editEduInfoBtn"
        >
          EDIT
        </button>
        <button
          name={id}
          onClick={(e) => props.handleDelete(e)}
          className="buttons deleteEduInfoBtn"
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default ExperienceInfoView;

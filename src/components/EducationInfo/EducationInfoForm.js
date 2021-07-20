import React from 'react';

const EducationInfoForm = (props) => {
  const { school, degree, subject, startDate, endDate, id } = props.info;

  return (
    <div className="educationInfoForm">
      <form
        onSubmit={(e) => {
          props.saveEdu(e, id);
        }}
        className="formEducation"
      >
        <div className="educationInfoInputs">
          <label htmlFor="school">Name of school</label>
          <input
            type="text"
            id="school"
            name="school"
            value={school}
            onChange={(e) => props.handleEduInput(e, id)}
            required
          />
        </div>

        <div className="educationInfoInputs">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={degree}
            onChange={(e) => props.handleEduInput(e, id)}
            required
          />
        </div>

        <div className="educationInfoInputs">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => props.handleEduInput(e, id)}
            required
          />
        </div>

        <div className="educationInfoInputs">
          <label htmlFor="startDate">From</label>
          <input
            type="text"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => props.handleEduInput(e, id)}
            required
          />
        </div>

        <div className="educationInfoInputs">
          <label htmlFor="endDate">To</label>
          <input
            type="text"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => props.handleEduInput(e, id)}
            required
          />
        </div>

        <div>
          <button type="submit" className="buttons saveEduInfoBtn">
            Save
          </button>
        </div>
      </form>
      <button
        name={id}
        onClick={(e) => props.handleCancel(e)}
        className="buttons cancelEduInfoBtn"
      >
        Cancel
      </button>
    </div>
  );
};

export default EducationInfoForm;

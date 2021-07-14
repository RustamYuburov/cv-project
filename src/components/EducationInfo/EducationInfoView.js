import React from 'react';

const EducationInfoView = (props) => {
  
  const { school, degree,
          subject, id,
          startDate, endDate,
          } = props.info;


    return(
      <div key={id} className='educationInfoView'>
        <div>
          <div className='educationInfoViews'><b>Name of School or University</b>: {school}</div>
          <div className='educationInfoViews'><b>Degree</b>: {degree}</div>
          <div className='educationInfoViews'><b>Subject</b>: {subject}</div>
          <div className='educationInfoViews'><b>Start Date</b>: {startDate}</div>
          <div className='educationInfoViews'><b>End Date</b>: {endDate}</div>
        </div>

        <div>
          <button name={id}
                  onClick={(e) => props.handleEdit(e)}
                  className='buttons editEduInfoBtn'>EDIT</button>
          <button name={id}
                  onClick={(e) => props.handleDelete(e)}
                  className='buttons deleteEduInfoBtn'>DELETE</button>
        </div>
      </div>
    ) 
}

export default EducationInfoView
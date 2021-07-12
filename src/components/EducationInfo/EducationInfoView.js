import React from 'react';

const EducationInfoView = (props) => {
  
  const { school, degree,
          startDate, endDate,
          id } = props.info;



    return(
      <div className='educationInfoView'>
        Here's gonna be the view of something
        <button className='buttons'>EDIT</button>
        <button className='buttons'>DELETE</button>
      </div>
    ) 
}

export default EducationInfoView
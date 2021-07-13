import React from 'react';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import EducationInfo from './EducationInfo/EducationInfo';

const MainContent = (props) => {

     return(
       <div className='mainContent'>
         <div className='generalInfo'>
          <GeneralInfo />
         </div>
         <hr/>
         <div className='educationInfo'>
           <EducationInfo />
         </div>
         <hr/>
         <div className='workExperienceInfo'>
           {/* <WorkExperienceInfo /> */}
         </div>
         <hr/>
         <div className='skills'>
           {/* <Skills /> */}
         </div>
       </div>
     )
}

export default MainContent
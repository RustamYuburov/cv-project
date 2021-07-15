import React from 'react';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import EducationInfo from './EducationInfo/EducationInfo';
import WorkExperience from './WorkExperience/WorkExperience';
import Skills from './Skills/Skills';

const MainContent = () => {

     return(
       <div className='mainContent'>
         <div className='generalInfo'>
           <h1>General Information</h1>
          <GeneralInfo />
         </div>
         <hr/>
         <div className='educationInfo'>
           <h1>Education</h1>
           <EducationInfo />
         </div>
         <hr/>
         <div className='workExperienceInfo'>
           <h1>Work Experience</h1>
           <WorkExperience />
         </div>
         <hr/>
         <div className='skills'>
         <h1>Skills</h1>
           <Skills />
         </div>
       </div>
     )
}

export default MainContent
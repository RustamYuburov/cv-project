import React from 'react';
import resumeIcon from '../images/resume-icon.png'

const Header = () => {
  return (
    <div className='headerDiv'>
      <img src={resumeIcon} alt='icon resume' />
      <h2>CV MAKER</h2>
    </div>
  )
}

export default Header;
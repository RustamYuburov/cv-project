import React from 'react';
import githubLogo from '../images/githubLogo.png'

const Footer = () => {
  return (
    <div className='footerDiv'> 
      <span className='footerText'>This project is made by Rustam Yuburov</span>
      <a href='https://github.com/RustamYuburov' target='_blank' className='footerLink'>
        <img className='footerIcon' src={githubLogo} alt='Github logo' />
      </a>
    </div>
  )
};

export default Footer;
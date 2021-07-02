import React from 'react';

const Footer = (props) => {
  const {link, src, alt} = props;

  return (
    <div className='footerDiv'> 
      <span className='footerText'>This project is made by Rustam Yuburov</span>
      <a href={link} target='_blank' className='footerLink'>
        <img className='footerIcon' src={src} alt={alt} />
      </a>
    </div>
  )
};

export default Footer;
import React from 'react';

const Header = (props) => {
  const {src, alt} = props;

  return (
    <div className='headerDiv'>
      <img src={src} alt={alt} />
      <h2>CV MAKER</h2>
    </div>
  )
}

export default Header;
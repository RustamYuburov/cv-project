import React from 'react';

const GeneralInfoView = (props) => {

  const { firstName, lastName, occupation,
          address, phone, email } = props.info;

    return(
      <div className='generalInfoView'>
        <div className='generalInfoViews'><b>Name</b>: {firstName+ ' ' +lastName}</div>
        <div className='generalInfoViews'><b>Current occupation</b>: {occupation}</div>
        <div className='generalInfoViews'><b>Current address</b>: {address}</div>
        <div className='generalInfoViews'><b>Phone number</b>: {phone}</div>
        <div className='generalInfoViews'><b>Email</b>: {email}</div>
        <button  onClick={(e) => props.editInfo(e)} className='buttons generalEditBtn'>EDIT</button>
      </div>
    ) 
}

export default GeneralInfoView
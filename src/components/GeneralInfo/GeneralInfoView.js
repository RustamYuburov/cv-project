import React from 'react';

const GeneralInfoView = (props) => {

  const { firstName, lastName, occupation,
          address, phone, email } = props.info;



    return(
      <div className='generalInfoView'>
        <div>{firstName+ ' ' +lastName}</div>
        <div>{occupation}</div>
        <div>{address}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <button  onClick={(e) => props.editInfo(e)} className='buttons generalEditBtn'>EDIT</button>
      </div>
    ) 
}

export default GeneralInfoView
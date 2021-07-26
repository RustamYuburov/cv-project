import React, { useState } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import GeneralInfoView from './GeneralInfoView';
import '../../styles/GeneralInfoStyle.css';

const GeneralInfo = () => {
  const [showView, setShowView] = useState(false);
  const [stateForm, setStateForm] = useState({
    firstName: '',
    lastName: '',
    occupation: '',
    address: '',
    phone: '',
    email: '',
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setStateForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const changeComponent = (e) => {
    e.preventDefault();
    setShowView(!showView);
  };

  if (!showView) {
    return (
      <GeneralInfoForm
        handleChange={handlePersonalChange}
        saveInfo={changeComponent}
        info={stateForm}
      />
    );
  } else {
    return (
      <GeneralInfoView info={stateForm} editInfo={changeComponent} />
    );
  }

};

export default GeneralInfo;

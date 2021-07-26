import React from 'react';

const GeneralInfoForm = (props) => {
  const { firstName, lastName, occupation, address, phone, email } = props.info;

  return (
    <div className="generalInfoForm">
      <form onSubmit={props.saveInfo} className="formGeneral">
        <div className="generalInfoInputs">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => props.handleChange(e)}
            required
          />
        </div>

        <div className="generalInfoInputs">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={(e) => props.handleChange(e)}
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            required
          />
        </div>

        <div className="generalInfoInputs">
          <label htmlFor="occupation">Current occupation</label>
          <input
            onChange={(e) => props.handleChange(e)}
            type="text"
            id="occupation"
            name="occupation"
            value={occupation}
            required
          />
        </div>

        <div className="generalInfoInputs">
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) => props.handleChange(e)}
            type="text"
            id="address"
            name="address"
            value={address}
            required
          />
        </div>

        <div className="generalInfoInputs">
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={(e) => props.handleChange(e)}
            type="text"
            id="phone"
            name="phone"
            value={phone}
            required
          />
        </div>

        <div className="generalInfoInputs">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => props.handleChange(e)}
            type="email"
            id="email"
            name="email"
            value={email}
            required
          />
        </div>

        <button type="submit" className="buttons generalSaveBtn">
          SAVE
        </button>
      </form>
    </div>
  );
};

export default GeneralInfoForm;

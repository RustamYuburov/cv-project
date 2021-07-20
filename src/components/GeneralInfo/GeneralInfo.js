import React, { Component } from 'react';
import GeneralInfoForm from './GeneralInfoForm';
import GeneralInfoView from './GeneralInfoView';
import '../../styles/GeneralInfoStyle.css';
class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      occupation: '',
      address: '',
      phone: '',
      email: '',
      showView: false,
    };
  }

  handlePersonalChange = (e) => {
    this.setState((prevState) => {
      const { name, value } = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  changeComponent = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      showView: !prevState.showView,
    }));
  };

  render() {
    let status = this.state.showView;
    let displayComponent;
    if (!status) {
      displayComponent = (
        <GeneralInfoForm
          handleChange={this.handlePersonalChange}
          saveInfo={this.changeComponent}
          info={this.state}
        />
      );
    } else {
      displayComponent = (
        <GeneralInfoView info={this.state} editInfo={this.changeComponent} />
      );
    }

    return <div>{displayComponent}</div>;
  }
}

export default GeneralInfo;

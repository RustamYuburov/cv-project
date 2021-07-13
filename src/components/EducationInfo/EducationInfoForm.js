import React, { Component } from 'react';


class EducationInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 

    }
  }

  render() {
    let {school, degree, subject,  startDate, endDate} = this.props;
    let eduForm;
    if (!school) {
      eduForm = <form className='formEducation'>
                  <div className='educationInfoInputs'>
                    <label htmlFor='school'>Name of school</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='degree'>Degree</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='subject'>Subject</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='startDate'>From</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='endDate'>To</label>
                    <input />
                  </div>

                  <div>
                    <button className='buttons'>Save</button>
                    <button className='buttons'>Cancel</button>
                  </div>
                </form>
    } else {
      eduForm = <form className='formEducation'>
                  <div className='educationInfoInputs'>
                    <label htmlFor='school'>Name of school</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='degree'>Degree</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='subject'>Subject</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='startDate'>From</label>
                    <input />
                  </div>

                  <div className='educationInfoInputs'>
                    <label htmlFor='endDate'>To</label>
                    <input />
                  </div>

                  <div>
                    <button className='buttons'>Save</button>
                    <button className='buttons'>Cancel</button>
                  </div>
                </form>
    }

    return(
      <div className='educationInfoForm'>
        {eduForm}
      </div>
    )
  }
}

export default EducationInfoForm;

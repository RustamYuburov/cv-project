import React, { Component } from 'react';


class EducationInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
        school: this.props.info.school,
        degree: this.props.info.degree,
        subject: this.props.info.subject,
        startDate: this.props.info.startDate,
        endDate: this.props.info.endDate,
        id: this.props.info.id,
    }
  }

  handleEduInput = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    let { school, degree, subject, 
          startDate, endDate, id } = this.state;

    return(
      <div key={id} className='educationInfoForm'>
        <form onSubmit={(e) => {this.props.saveEdu(e, this.state)}} className='formEducation'>
          <div className='educationInfoInputs'>
            <label htmlFor='school'>Name of school</label>
            <input type='text'
                  id='school'
                  name='school'
                  value={school}
                  onChange={(e) => this.handleEduInput(e)}
                  required
                  />
          </div>

          <div className='educationInfoInputs'>
            <label htmlFor='degree'>Degree</label>
            <input type='text'
                  id='degree'
                  name='degree'
                  value={degree}
                  onChange={(e) => this.handleEduInput(e)}
                  required
                  />
          </div>

          <div className='educationInfoInputs'>
            <label htmlFor='subject'>Subject</label>
            <input type='text'
                  id='subject'
                  name='subject'
                  value={subject}
                  onChange={(e) => this.handleEduInput(e)}
                  required
                  />
          </div>

          <div className='educationInfoInputs'>
            <label htmlFor='startDate'>From</label>
            <input type='text'
                  id='startDate'
                  name='startDate'
                  value={startDate}
                  onChange={(e) => this.handleEduInput(e)}
                  required
                  />
          </div>

          <div className='educationInfoInputs'>
            <label htmlFor='endDate'>To</label>
            <input type='text'
                  id='endDate'
                  name='endDate'
                  value={endDate}
                  onChange={(e) => this.handleEduInput(e)}
                  required
                  />
          </div>

          <div>
            <button type='submit'
                    className='buttons saveEduInfoBtn'>Save</button>
          </div>
        </form>
        <button name={id}
                onClick={(e) => this.props.handleCancel(e)}
                className='buttons cancelEduInfoBtn'>Cancel</button>
      </div>
    )
  }
}

export default EducationInfoForm;

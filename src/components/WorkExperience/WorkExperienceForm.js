import React, { Component } from 'react';


class ExperienceInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = { 
        position: this.props.info.position,
        company: this.props.info.company,
        mainTasks: this.props.info.mainTasks,
        startDate: this.props.info.startDate,
        endDate: this.props.info.endDate,
        id: this.props.info.id,
    }
  }

  handleExpInput = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    let { position, company, mainTasks, 
          startDate, endDate, id } = this.state;

    return(
      <div key={id} className='experienceInfoForm'>
        <form onSubmit={(e) => {this.props.saveExp(e, this.state)}} className='formExperience'>
          <div className='experienceInfoInputs'>
            <label htmlFor='position'>Position</label>
            <input type='text'
                  id='position'
                  name='position'
                  value={position}
                  onChange={(e) => this.handleExpInput(e)}
                  required
                  />
          </div>

          <div className='experienceInfoInputs'>
            <label htmlFor='company'>Company</label>
            <input type='text'
                  id='company'
                  name='company'
                  value={company}
                  onChange={(e) => this.handleExpInput(e)}
                  required
                  />
          </div>

          <div className='experienceInfoInputs'>
            <label htmlFor='mainTasks'>Main tasks and responsibilities</label>
            <input type='text'
                  id='mainTasks'
                  name='mainTasks'
                  value={mainTasks}
                  onChange={(e) => this.handleExpInput(e)}
                  required
                  />
          </div>

          <div className='experienceInfoInputs'>
            <label htmlFor='startDate'>From</label>
            <input type='text'
                  id='startDate'
                  name='startDate'
                  value={startDate}
                  onChange={(e) => this.handleExpInput(e)}
                  required
                  />
          </div>

          <div className='experienceInfoInputs'>
            <label htmlFor='endDate'>To</label>
            <input type='text'
                  id='endDate'
                  name='endDate'
                  value={endDate}
                  onChange={(e) => this.handleExpInput(e)}
                  required
                  />
          </div>

          <div>
            <button type='submit'
                    className='buttons saveExpInfoBtn'>Save</button>
          </div>
        </form>
        <button name={id}
                onClick={(e) => this.props.handleCancel(e)}
                className='buttons cancelExpInfoBtn'>Cancel</button>
      </div>
    )
  }
}

export default ExperienceInfoForm;

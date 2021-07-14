import React, { Component } from 'react';
import '../../styles/SkillsStyle.css'
import SkillsView from './SkillsView';
import uniqid from 'uniqid';
class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skill: {
        name: '',
        id: uniqid(),
      },
      skills: [],
    };

  }

  handleChange = (e) => {
    this.setState({
      skill: {
        name: e.target.value,
        id: this.state.skill.id,
      }
    })
  }

  onSubmitSkill = (e) => {
    e.preventDefault();
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: {
        name: '',
        id: uniqid()
      },
    })
  }

  deleteSkill = (id) => {
    this.setState({
      skills: [...this.state.skills].filter(skill => skill.id !== id),
      skill: {
        name: '',
        id: uniqid()
      },
    })
  }

  render() {
    const { skill, skills } = this.state;

    return (
      <div className='skillsInfo'>
        <form className='skillsForm' onSubmit={this.onSubmitSkill}>
          <label htmlFor='skillInput'>Enter Skill</label>
          <input onChange={this.handleChange} value={skill.name}
                type='text' id='skillInput' required/>
          <button type='submit' className='buttons addSkillsBtn'>Add</button>
        </form>
        <SkillsView skills={skills} handleDelete={this.deleteSkill} />
      </div>
    );
  }
}

export default Skills;
import React, { useState } from 'react';
import '../../styles/SkillsStyle.css'
import SkillsView from './SkillsView';
import uniqid from 'uniqid';

const Skills = () => {
  const [skill, setSkill] = useState({name: '', id: uniqid()});
  const [skills, setSkills] = useState([])

  const handleChange = (e) => {
    setSkill({
        name: e.target.value,
        id: skill.id,
      })
  }

  const onSubmitSkill = (e) => {
    e.preventDefault();
    setSkills(skills.concat(skill));
    setSkill({name: '', id: uniqid()})
  }

  const deleteSkill = (id) => {
    const newSkills = skills.filter(skill => skill.id !== id);
    setSkills(newSkills);
  }

    return (
      <div className='skillsInfo'>
        <form className='skillsForm' onSubmit={onSubmitSkill}>
          <label htmlFor='skillInput'>Enter Skill</label>
          <input onChange={handleChange} value={skill.name}
                type='text' id='skillInput' required/>
          <button type='submit' className='buttons addSkillsBtn'>Add</button>
        </form>
        <SkillsView skills={skills} handleDelete={deleteSkill} />
      </div>
    );
}

export default Skills;
import React from 'react';

const SkillsView = (props) => {
  const { skills , handleDelete } = props;

  return (
    <ul>
      {skills.map((skill, index) => {
        return <div className='skill'>
          <li key={skill.id}>{skill.name}</li>
          <button onClick={() => handleDelete(skill.id)}>&times;</button>
        </div>
        
      })}
    </ul>
  )
}
export default SkillsView ;
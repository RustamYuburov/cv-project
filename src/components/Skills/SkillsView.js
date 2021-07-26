import React from 'react';

const SkillsView = (props) => {
  const { skills , handleDelete } = props;

  return (
    <ul>
      {skills.map((skill, index) => {
        return <div key={skill.id} className='skill'>
          <li >{skill.name}</li>
          <button onClick={() => handleDelete(skill.id)}>&times;</button>
        </div>
        
      })}
    </ul>
  )
}
export default SkillsView ;
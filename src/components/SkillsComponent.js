import React from 'react';
import { Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


function SkillsComponent ({skill, handleClick}){
  const { skill: skillName, text, image, } = skill;
  return (

<Col xs={4}>
  <Image className='skills-image' fluid src={image} alt={skillName} onClick={()=>handleClick(skillName, text)}/>

  </Col> 
     );
}
export default SkillsComponent;
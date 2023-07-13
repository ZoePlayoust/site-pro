import React from 'react';
import {Container } from 'react-bootstrap';



function SkillsTextComponent ({style, text, title}){

  return (
<Container className='skills-text-container p-3' style={style}>
<h3>{title}</h3>
<p className='skills-text justified-text pt-3'>{text}</p>
</Container>

     );
}
export default SkillsTextComponent;
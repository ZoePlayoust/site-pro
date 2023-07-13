import React from 'react';
import { skillsData } from '../data/skillsData';
import SkillsComponent from '../components/SkillsComponent';
import SkillsTextComponent from '../components/SkillsTextComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function SkillsContainer (){

const [clickedSkill, setClickedSkill] = useState(""); 
const [clickedText, setClickedText] = useState(""); 
console.log(clickedSkill);  
const handleClick = (skillName, text) =>{
  console.log(clickedSkill)
if (clickedSkill === skillName){
return null; 
} else {
  setClickedSkill(skillName)
  setClickedText(text)

}
  }
   
  return (
    <Container className='mt-5 mb-5'>
     <h2 id="skills" className='mb-3 ms-4'>Skills featured</h2>
     <p  className="ms-4" style={{
    display: clickedText === "" ? 'block' : 'none',
  }}>Please, click on a skill to learn more</p>
    <Row >
     <Col>
     <Container>
      <Row>
    {skillsData.map((datum) => (
          <SkillsComponent key={datum.skill} skill={datum} handleClick={handleClick}/>
      ))}
      </Row>
      </Container>
</Col>
<Col  className='d-flex align-items-center pe-0'>
<SkillsTextComponent
  style={{
    backgroundColor: clickedSkill === "" ? '#fff' : '#f9efee',
  }}
  text={clickedText}
  title={clickedSkill}
/>
</Col>
         </Row>  
    </Container>
      
   

   );
}
export default SkillsContainer;
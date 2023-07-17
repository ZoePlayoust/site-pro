import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { websiteData } from '../data/websitesData';

function WebsitesContainer (){
  
  return (
    <Container className='mt-5 mb-5 '>
      <Row>
        <Col xs={8}></Col>
        <Col xs={4}> <h2 id="Websites" className='mb-1'>Websites examples</h2></Col>
        </Row>
     
    
{websiteData.map((datum) => (
    <Row id="websites" className='mb-3 d-flex align-items-center'>
    <Col xs={8}><a href={datum.url} rel="noreferrer" target='_blank' title="Visit the app" ><Image fluid src={datum.image} alt={datum.alt} /></a></Col>
    <Col xs={4}><div ><h3>{datum.name}</h3><p className='justified-text website-text'>{datum.text}</p></div></Col>
    </Row>
      ))}
   
    </Container>
      
   

   );
}
export default WebsitesContainer;

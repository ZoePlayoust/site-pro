import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import { websiteData } from '../data/websitesData';

function WebsitesContainer (){
  
  return (
    <Container className='mt-5 mb-5'>
      <h2 id="Websites" className='mb-3 ms-4'>Websites examples</h2>
    
{websiteData.map((datum) => (
    <Row id="websites" className='mb-3'>
    <Col xs={6}><a href={datum.url} target='_blank' title="Visit the app" ><Image fluid src={datum.image} alt={datum.alt} /></a></Col>
    <Col xs={6}><h3>{datum.name}</h3><p className='justified-text'>{datum.text}</p></Col>
    </Row>
      ))}
   
    </Container>
      
   

   );
}
export default WebsitesContainer;
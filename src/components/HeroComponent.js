import React from 'react';
import portraitImage from '../imagery/PORTRAIT_ZOE.jpg';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function HeroComponent() {
    return (
        <div className='hero-container pt-5 ps-5 ms-o pb-4'>
    <Container className="" id='home'>
    <Row>
        <Col xs={3}>
            <Image roundedCircle fluid alt="Portrait of Zoé wearing an orange dress and looking in the distance" src={portraitImage}/>
        </Col>
        <Col className='d-flex align-items-center' >
            <div>
            <h1 className='ms-5'>Zoé Playoust - Creative digital marketing</h1>
            <p className="hero-text mb-0 ms-5" >
            Hey there! I'm a 28-year-old creative and enthusiast based in Marseille. When I'm not busy exploring the great outdoors you'll find me geeking out and having a blast.<br/><br/>
            Now, here's where the magic happens. Five years ago I've discovered a way to merge my passion for creativity and design with my marketing appetite and I started my activity as a freelancer. With a knack for crafting engaging content and a keen eye for aesthetics, I can help you create a digital identity that stands out from the crowd. Whether it's developing your brand's voice, creating captivating social media campaigns, or bringing your ideas to life through well-designed websites, localizing your brand, I've got you covered.<br/><br/>
            So, if you're looking for someone who can bring a touch of fun and creativity to your digital presence, let's team up!     
            </p>
            </div>
        </Col>
    </Row>
  </Container>
  </div>
  )
};

export default HeroComponent;
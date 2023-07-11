import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar () {
  
  const mailText = `mailto:playoustz@gmail.com?bcc=zoeprofdefrancais@gmail.com&subject=Contact&body=Hello%2C%20%0A%0AI%20would%20like%20more%20information%20about%20%5Btopic%5D.%0A%0A%5Bname%5D%20%5Blast%20name%5D%20%5Bfunction%5D%20%5Bcompany%5D%20%5Bphone%20number%5D%20%5Bcountry%5D.%0AThank%20you!%0A%0A`
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Zoé Playoust</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            
          </Nav>
          <Button variant="secondary dark" ><a className="contact"href={mailText}>Contact me!</a></Button>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
    );
  }
  
  export default NavBar;
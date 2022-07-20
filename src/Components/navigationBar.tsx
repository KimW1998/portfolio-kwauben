import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavigationBar = () => {
    return (
      <div>
<Navbar expand="lg">
  <Container>
    <Navbar.Brand className='text-white' href="#home">KWAUBEN</Navbar.Brand>
    <Navbar.Text>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='text-white Small-Text' href="#Home">Home</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#AboutMe">About</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#Skills">Skills</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#MyWork">Projects</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#LivingRaw">Living Raw</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#ContactMe">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar.Text>
  </Container>
</Navbar>
      </div>
    );
  }
  
  export default NavigationBar;
  
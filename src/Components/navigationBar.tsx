import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const NavigationBar = () => {
    return (
      <div>
<Navbar expand="lg" >
  <Container>
    <Navbar.Brand className='text-white' href="#home">KWAUBEN</Navbar.Brand>
    <Navbar.Text>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className='text-white Small-Text' href="#home">Home</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#link">About</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#link">Portfolio</Nav.Link>
        <Nav.Link className='text-white Small-Text' href="#link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar.Text>
  </Container>
</Navbar>
      </div>
    );
  }
  
  export default NavigationBar;
  
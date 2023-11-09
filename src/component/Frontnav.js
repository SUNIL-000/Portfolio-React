import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Frontnav.css"
import logo from "../images/brandicon.png"
// import avat from "../assest/man.png"
function Frontnav() {
  return (
    <Navbar expand="md" className="nav">
      <Container>
        {/* <img src={logo} alt="" /> */}
        <img src={logo} id="avatar" alt="" />
        <Navbar.Brand href="/"id="brand">Portfolio.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/"  className='links'>Home</Nav.Link>
            <Nav.Link href="/about"   className='links'>About</Nav.Link>
            <Nav.Link href="/project"  className='links'>Project</Nav.Link>
            <Nav.Link href="/skill"  className='links'>Skill</Nav.Link>
            <Nav.Link href="/connect"  className='links'>Connect</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Frontnav;
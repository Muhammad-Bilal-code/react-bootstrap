import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="#home">FurniLux</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#features" className='fw-bold border-bottom border-3 border-secondary p-0'>Home</Nav.Link>
            <Nav.Link href="#pricing" className='fw-bold p-0'>Categories</Nav.Link>
            <Nav.Link href="#pricing" className='fw-bold p-0'>About Us</Nav.Link>
            <Nav.Link href="#pricing" className='fw-bold p-0'>Pages</Nav.Link>
            <Nav.Link href="#pricing" className='fw-bold p-0'>Contact Us</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='border border-1 rounded'>Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar

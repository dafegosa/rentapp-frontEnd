import React from 'react'
import 'bootswatch/dist/materia/bootstrap.min.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const HeaderUser = ({ login }) => {
  console.log(login)
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      class='navbar navbar-expand-lg navbar-light'
      style={{
        color: 'black',
        padding: ' 0 1%',
        height: 'auto',
      }}
    >
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Nav.Link href='#features' style={{ color: 'white', paddingLeft: '0' }}>
        <strong>
          <i class='far fa-user'></i> Usuario
        </strong>
      </Nav.Link>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='#pricing'> He rentado </Nav.Link>
          <Nav.Link href='#pricing'> Crear nuevo elemento </Nav.Link>
          <Nav.Link href='#pricing'> Mis elementos </Nav.Link>
          <Nav.Link href='#pricing'> Mi billetera </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default HeaderUser

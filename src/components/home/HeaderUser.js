import React, { useEffect } from 'react'
import 'bootswatch/dist/materia/bootstrap.min.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

const HeaderUser = ({ login, history }) => {
  // const userEmail = useSelector((state) => state.user.email)
  const userEmail = localStorage.getItem('uName')
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
          <i class='far fa-user'></i> {userEmail || 'Usuario'}
        </strong>
      </Nav.Link>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='#pricing'> He rentado </Nav.Link>
          <Nav.Link href='#pricing' onClick={() => history.push('/newElement')}>
            {' '}
            Crear nuevo elemento{' '}
          </Nav.Link>
          <Nav.Link href='#pricing'> Mis elementos </Nav.Link>
          <Nav.Link href='#pricing'> Mi billetera </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(HeaderUser)

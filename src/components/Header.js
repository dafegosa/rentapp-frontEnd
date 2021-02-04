import React from 'react'
import 'bootswatch/dist/materia/bootstrap.min.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = ({ login }) => {
  console.log(login)
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      class='navbar navbar-expand-lg navbar-light'
      style={{ background: '#74e893', color: 'black', padding: '1%' }}
    >
      <Navbar.Brand href='#home'>RentApp</Navbar.Brand>
      <Nav.Link
        href='#pricing'
        style={{ color: 'black', width: '150px' }}
        onClick={() => login()}
      >
        Iniciar sesion
      </Nav.Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <form
        style={{
          background: 'white',
          borderBottomRightRadius: '20px',
          borderTopLeftRadius: '20px',
          display: 'flex',
          width: '100%',
          height: '35px',
          padding: '0 1%',
          margin: '0 1%',
        }}
      >
        <NavDropdown title='Categorías' id='collasible-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
        </NavDropdown>
        <input
          class='form-control'
          type='text'
          placeholder='  Search'
          style={{
            background: 'white',
            borderTopLeftRadius: '20px',
            width: '90%',
            height: '25px',
          }}
        />

        <button
          type='button'
          style={{
            border: 'none',
            background: 'white',
            borderBottomRightRadius: '20px',
            marginRight: '2px',
            padding: '0',
            width: '10%',
          }}
        >
          <i
            class='em em-mag'
            aria-role='presentation'
            aria-label='LEFT-POINTING MAGNIFYING GLASS'
          ></i>
        </button>
      </form>
    </Navbar>
  )
}

export default Header

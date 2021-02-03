import React from 'react'
import 'bootswatch/dist/materia/bootstrap.min.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      class='navbar navbar-expand-lg navbar-light'
      style={{ background: '#74e893', color: 'black', padding: '1%' }}
    >
      <Navbar.Brand href='#home'>RentApp</Navbar.Brand>
      <Nav.Link href='#pricing' style={{ color: 'black', paddingLeft: '0' }}>
        SignIn/SignUp
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
    //   <nav
    //     class='navbar navbar-expand-lg navbar-light'
    //     style={{ background: '#74e893', color: 'black' }}
    //   >
    //     <a class='navbar-brand' href='#'>
    //       Navbar
    //     </a>
    //     <button
    //       class='navbar-toggler'
    //       type='button'
    //       data-toggle='collapse'
    //       data-target='#navbarColor03'
    //       aria-controls='navbarColor03'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <span class='navbar-toggler-icon'></span>
    //     </button>

    //     <div class='collapse navbar-collapse' id='navbarColor03'>
    //       <ul class='navbar-nav mr-auto'>
    //         <li class='nav-item active'>
    //           <a class='nav-link' href='#'>
    //             Home
    //             <span class='sr-only'>(current)</span>
    //           </a>
    //         </li>
    //         <li class='nav-item'>
    //           <a class='nav-link' href='#'>
    //             Features
    //           </a>
    //         </li>
    //         <li class='nav-item'>
    //           <a class='nav-link' href='#'>
    //             Pricing
    //           </a>
    //         </li>
    //         <li class='nav-item'>
    //           <a class='nav-link' href='#'>
    //             About
    //           </a>
    //         </li>
    //         <li class='nav-item dropdown'>
    //           <a
    //             class='nav-link dropdown-toggle'
    //             data-toggle='dropdown'
    //             href='#'
    //             role='button'
    //             aria-haspopup='true'
    //             aria-expanded='false'
    //           >
    //             Dropdown
    //           </a>
    //           <div class='dropdown-menu'>
    //             <a class='dropdown-item' href='#'>
    //               Action
    //             </a>
    //             <a class='dropdown-item' href='#'>
    //               Another action
    //             </a>
    //             <a class='dropdown-item' href='#'>
    //               Something else here
    //             </a>
    //             <div class='dropdown-divider'></div>
    //             <a class='dropdown-item' href='#'>
    //               Separated link
    //             </a>
    //           </div>
    //         </li>
    //       </ul>

    //       <form
    //         class='form-inline my-2 my-lg-0'
    //         style={{
    //           background: 'white',
    //           borderBottomRightRadius: '20px',
    //           borderTopLeftRadius: '20px',
    //         }}
    //       >
    //         <input
    //           class='form-control'
    //           type='text'
    //           placeholder='Search'
    //           style={{ background: 'white', borderTopLeftRadius: '20px' }}
    //         />

    //         <button
    //           type='button'
    //           style={{ border: 'none', background: 'white', marginRight: '2px' }}
    //         >
    //           <i
    //             class='em em-mag'
    //             aria-role='presentation'
    //             aria-label='LEFT-POINTING MAGNIFYING GLASS'
    //           ></i>
    //         </button>
    //       </form>
    //     </div>
    //   </nav>
  )
}

export default Header

import React, { useEffect } from 'react'
import 'bootswatch/dist/materia/bootstrap.min.css'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { myElementsList } from '../../actions/results'

const HeaderUser = ({ login, history }) => {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.user.id)
  const items = useSelector((state) => state.items)
  useEffect(() => {
    try {
      dispatch(myElementsList(id))
    } catch (err) {}
  }, [])
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
      <Nav.Link
        href='#pricing'
        style={{ background: '#4b574d', color: 'white' }}
        onClick={() => history.push('/shop')}
      >
        {' '}
        <i class='fas fa-shopping-cart'></i>
        {items.length}{' '}
      </Nav.Link>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href='#pricing'> He rentado </Nav.Link>
          <Nav.Link href='#pricing' onClick={() => history.push('/newElement')}>
            {' '}
            Crear nuevo elemento{' '}
          </Nav.Link>
          <Nav.Link
            href='#pricing'
            onClick={() => history.push('/My_elements_list')}
          >
            {' '}
            Mis elementos{' '}
          </Nav.Link>
          <Nav.Link href='#pricing'> Mi billetera </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default withRouter(HeaderUser)

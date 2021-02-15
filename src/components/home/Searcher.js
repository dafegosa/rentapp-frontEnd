import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FilterElementList from '../elements/FilterElementList'
import Header from './Header'
import HeaderUser from './HeaderUser'
import Login from './Login'
import Nav from 'react-bootstrap/Nav'

const Searcher = ({ history }) => {
  const search = useSelector((state) => state.search)
  let elements = useSelector((state) => state.elements)
  const [category, setCategory] = useState('')
  const [log, setLog] = useState(false)
  const token = localStorage.getItem('token')
  const login = () => {
    setLog(!log)
  }

  switch (search.category) {
    case 'Audiovisual':
      elements = elements.filter((el) => el.category === 'Audiovisual')
      elements = elements.filter((el) =>
        el.name.toLowerCase().includes(search.search.toLowerCase())
      )
      break
    case 'Eventos':
      elements = elements.filter((el) => el.category === 'Eventos')
      elements = elements.filter((el) =>
        el.name.toLowerCase().includes(search.search.toLowerCase())
      )
      break
    case 'Audiovisual y Eventos':
      elements = elements.filter(
        (el) => el.category === 'Audiovisual y Eventos'
      )
      elements = elements.filter((el) =>
        el.name.toLowerCase().includes(search.search.toLowerCase())
      )
      break
    default:
      elements = elements.filter((el) =>
        el.name.toLowerCase().includes(search.search.toLowerCase())
      )
      break
  }
  return (
    <div
      style={{
        background: 'rgb(215,222,217)',
        background:
          'linear-gradient(0deg, rgba(215,222,217,1) 0%, rgba(201,223,207,1) 51%, rgba(116,232,147,1) 93%)',
      }}
    >
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      {log ? <Login login={login} /> : null}
      <Nav variant='pills' activeKey='1' style={{ justifyContent: 'center' }}>
        <Nav.Item>
          <Nav.Link eventKey='2' onClick={() => history.push('/elements')}>
            Ver más...
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <FilterElementList elements={elements} />
    </div>
  )
}

export default withRouter(Searcher)

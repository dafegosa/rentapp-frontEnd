import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ElementsList from '../home/ElementsList'
import { useSelector } from 'react-redux'
import FilterElementList from './FilterElementList'

const Filter = () => {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`)
  const [category, setCategory] = useState('')
  let elements = useSelector((state) => state.elements)

  switch (category) {
    case 'AUDIOVISUAL':
      elements = elements.filter((el) => el.category === 'Audiovisual')
      break
    case 'EVENTOS':
      elements = elements.filter((el) => el.category === 'Eventos')
      break
    case 'AUDIOVISUAL Y EVENTOS':
      elements = elements.filter(
        (el) => el.category === 'Audiovisual y Eventos'
      )
      break
    case 'arte':
      elements = elements.filter((el) => el.subCategory === 'Arte')
      break
    case 'fotografía e iluminación':
      elements = elements.filter(
        (el) => el.subCategory === 'Fotografía e iluminación'
      )
      break
    case 'sonido':
      elements = elements.filter((el) => el.subCategory === 'Sonido')
      break
    case 'post-producción':
      elements = elements.filter((el) => el.subCategory === 'Post-producción')
      break
    case 'logística':
      elements = elements.filter((el) => el.subCategory === 'Logística')
      break
    case 'decoración':
      elements = elements.filter((el) => el.subCategory === 'Decoración')
      break
    case 'menaje':
      elements = elements.filter((el) => el.subCategory === 'Menaje')
      break
    default:
      break
  }

  return (
    <div>
      <Nav variant='pills' activeKey='1' style={{ justifyContent: 'center' }}>
        <Nav.Item>
          <Nav.Link
            eventKey='1'
            onClick={() => setCategory('AUDIOVISUAL Y EVENTOS')}
          >
            AUDIOVISUAL Y EVENTOS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='1' onClick={() => setCategory('AUDIOVISUAL')}>
            AUDIOVISUAL
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='1' onClick={() => setCategory('EVENTOS')}>
            EVENTOS
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='1' onClick={() => setCategory('TODO')}>
            TODO
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey='2' onClick={() => setCategory('arte')}>
            arte
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='2'
            onClick={() => setCategory('fotografía e iluminación')}
          >
            fotografía e iluminación
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2' onClick={() => setCategory('sonido')}>
            sonido
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2' onClick={() => setCategory('post-producción')}>
            post-producción
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2' onClick={() => setCategory('logística')}>
            logística
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2' onClick={() => setCategory('decoración')}>
            decoración
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2' onClick={() => setCategory('menaje')}>
            menaje
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <FilterElementList elements={elements} />
    </div>
  )
}

export default Filter

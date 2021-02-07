import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FilterElementList from '../elements/FilterElementList'
import Header from './Header'
import HeaderUser from './HeaderUser'
import Login from './Login'

const Searcher = () => {
  const search = useSelector((state) => state.search)
  console.log('MIRAMELO MI PEZ => ', search)
  let elements = useSelector((state) => state.elements)
  const [category, setCategory] = useState('')
  const [log, setLog] = useState(false)
  const token = localStorage.getItem('token')
  const login = () => {
    setLog(!log)
  }

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
    <div style={{ background: '#e8e8e8' }}>
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      {log ? <Login login={login} /> : null}
      <FilterElementList elements={elements} />
    </div>
  )
}

export default Searcher

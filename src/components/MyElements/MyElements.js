import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Header from '../home/Header'
import HeaderUser from '../home/HeaderUser'
import MyElementsList from './MyElementsList'

const MyElements = () => {
  const [log, setLog] = useState(false)
  const token = localStorage.getItem('token')
  const login = () => {
    setLog(!log)
  }
  return (
    <div style={{ background: '#e8e8e8' }}>
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      <MyElementsList />
    </div>
  )
}

export default MyElements

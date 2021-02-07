import React, { useState } from 'react'
import ElementsList from '../home/ElementsList'
import Header from '../home/Header'
import HeaderUser from '../home/HeaderUser'
import Login from '../home/Login'
import Filter from './Filter'

const Elements = () => {
  const [log, setLog] = useState(false)
  const token = localStorage.getItem('token')
  const login = () => {
    setLog(!log)
  }

  return (
    <div style={{ background: '#e8e8e8' }}>
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      <Filter />
      {log ? <Login login={login} /> : null}
    </div>
  )
}

export default Elements

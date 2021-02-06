import React, { useState } from 'react'
import FormCreateElement from './FormCreateElement'
import Header from '../home/Header'
import HeaderUser from '../home/HeaderUser'

const CreateElement = () => {
  const [log, setLog] = useState(false)
  const token = localStorage.getItem('token')
  const login = () => {
    setLog(!log)
  }

  return (
    <div style={{ background: '#e8e8e8' }}>
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      <FormCreateElement />
    </div>
  )
}

export default CreateElement

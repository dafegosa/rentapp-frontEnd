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
    <div
      style={{
        background: 'rgb(215,222,217)',
        background:
          'linear-gradient(0deg, rgba(215,222,217,1) 0%, rgba(201,223,207,1) 51%, rgba(116,232,147,1) 93%)',
      }}
    >
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      <MyElementsList />
    </div>
  )
}

export default MyElements

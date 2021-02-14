import React, { useState } from 'react'
import Header from '../home/Header'
import HeaderUser from '../home/HeaderUser'
import ShoppingInfo from './ShoppingInfo'
import { ShoppingList } from './ShoppingList'

const ShoppingCard = () => {
  const [log, setLog] = useState(false)
  const token = localStorage.getItem('token')
  const login = () => {
    setLog(!log)
  }

  return (
    <div style={{ background: '#e8e8e8' }}>
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      <ShoppingInfo />
      <ShoppingList />
    </div>
  )
}

export default ShoppingCard

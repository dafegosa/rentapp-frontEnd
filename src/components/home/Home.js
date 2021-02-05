import React, { useState } from 'react'
import BigCarousel from './BigCarousel'
import Header from './Header'
import HeaderUser from './HeaderUser'
import Login from './Login'
import LargeCard from './LargeCard'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

function App() {
  const [log, setLog] = useState(false)
  const token = localStorage.getItem('token')
  const login = () => {
    setLog(!log)
  }
  return (
    <div style={{ background: '#e8e8e8' }}>
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      {log ? <Login login={login} /> : null}
      <BigCarousel />
      <LargeCard />
    </div>
  )
}

export default App

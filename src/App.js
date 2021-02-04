import React, { useState } from 'react'
import './App.css'
import BigCarousel from './components/BigCarousel'
import Header from './components/Header'
import HeaderUser from './components/home/HeaderUser'
import Login from './components/home/Login'
import LargeCard from './components/LargeCard'

function App() {
  const [log, setLog] = useState(false)
  const login = () => {
    setLog(!log)
  }
  return (
    <div style={{ background: '#e8e8e8' }}>
      <Header login={login} />
      <HeaderUser />
      {log ? <Login /> : null}
      <BigCarousel />
      <LargeCard />
    </div>
  )
}

export default App

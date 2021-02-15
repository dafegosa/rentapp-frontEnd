import React, { useState, useEffect } from 'react'
import BigCarousel from './BigCarousel'
import Header from './Header'
import HeaderUser from './HeaderUser'
import Login from './Login'
import LargeCard from './LargeCard'
import { useSelector, useDispatch } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import ElementsList from './ElementsList'
import { elementsList } from '../../actions/results'
import DetailModal from './DetailModal'

function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      dispatch(elementsList())
    } catch (err) {}
  }, [])
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
        minHeight: '100vh',
      }}
    >
      <Header login={login} />
      {token ? <HeaderUser /> : null}
      {log ? <Login login={login} /> : null}
      <BigCarousel />
      <LargeCard />
      <ElementsList />
    </div>
  )
}

export default Home

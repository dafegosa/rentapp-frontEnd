import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './components/home/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import CreateElement from './components/createElement/CreateElement'
import MyElements from './components/MyElements/MyElements'
import { useSelector, useDispatch } from 'react-redux'
import { elementsList } from './actions/results'
import Elements from './components/elements/Elements'
import Searcher from './components/home/Searcher'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      dispatch(elementsList())
    } catch (err) {}
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/newElement' component={CreateElement} />
        <Route exact path='/My_elements_list' component={MyElements} />
        <Route exact path='/elements' component={Elements} />
        <Route exact path='/search' component={Searcher} />
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        <Redirect to='home' />
      </Switch>
    </Router>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import Home from './components/home/Home'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import CreateElement from './components/CreateElement'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/newElement' component={CreateElement} />
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        <Redirect to='home' />
      </Switch>
    </Router>
  )
}

export default App

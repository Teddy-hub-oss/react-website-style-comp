import React from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar } from '../components/sections'


const App = () => {
  return (
   <div className="App">
   <Router>
   <Navbar />
   </Router>
    
   </div>

  )
}

export default App

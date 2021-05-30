import React from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar } from '../components/sections'
import GlobalStyle from '../globalStyles'


const App = () => {
  return (
   
   <Router>
   <GlobalStyle />
   <Navbar />
   </Router>


  )
}

export default App

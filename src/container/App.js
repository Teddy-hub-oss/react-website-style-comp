import React from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import GlobalStyle from '../globalStyles'
import Home from '../components/pages/HomePage/Home'

const App = () => {
  return (
   
   <Router>
   <GlobalStyle />
   <Navbar />
   <Switch>
      <Route path="/" exact component={Home} />
   </Switch>
   </Router>

  )
}

export default App

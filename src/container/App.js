import React, { Component, Fragment, useEffect} from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Switch,  Route, withRouter, Link } from 'react-router-dom'
import { Navbar, Footer} from '../components'
import GlobalStyle from '../globalStyles'
import Home from '../pages/HomePage/Home'
import Products from '../pages/Products/Products'
import Services from '../pages/Services/Services'
import SignUp from '../pages/SignUp/SignUp'
import ScrollToTop from '../components/ScrollToTop'



const App = () => {
  return (
  
  <Router>
   <GlobalStyle />
   <ScrollToTop />
   <Navbar />
   <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
      <Route path='/signup' component={SignUp} />
      
   </Switch>
   <Footer />
  </Router>
  )
}

export default App

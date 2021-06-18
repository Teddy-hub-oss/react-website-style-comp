import React, { Component, Fragment} from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, Footer} from '../components'
// import Footer from '../components/Footer/Footer'
import GlobalStyle from '../globalStyles'
import Home from '../pages/HomePage/Home'
import Products from '../pages/Products/Products'
import Services from '../pages/Services/Services'
import SignUp from '../pages/SignUp/SignUp'


const App = () => {
  return (
  
   <Router>
   <GlobalStyle />
   <Navbar />
 
   <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
      <Route path='/sign-up' component={SignUp} />
   </Switch>
   <Footer />
   </Router>
  
  )
}

export default App

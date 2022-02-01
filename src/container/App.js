import React, { Fragment, useEffect} from 'react'
import './App.css'
import { IconContext } from 'react-icons'
import { BrowserRouter, Routes, Switch, Route, Link} from 'react-router-dom'
import { Navbar, Footer} from '../components'
import GlobalStyle from '../globalStyles'
import Home from '../pages/HomePage/Home'
import Products from '../pages/Products/Products'
import Services from '../pages/Services/Services'
import SignUp from '../pages/SignUp/SignUp'




const App = () => {
  return (
  
  <BrowserRouter>
   <GlobalStyle />
  
   <Navbar />
   <Routes>
  
      <Route path='/' exact element={<Home/>} />
      <Route path='/services' element={<Services />} />
      <Route path='/products' element={<Products />} />
      <Route path='/signup' element={<SignUp />} />
      
   </Routes>
   <Footer />
  </BrowserRouter>
  )
}

export default App

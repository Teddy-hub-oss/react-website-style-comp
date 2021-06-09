import React, { useState, useEffect} from 'react'
import {GoThreeBars} from 'react-icons/go'
import {FaTimes} from 'react-icons/fa'
import { Container, Button } from '../../globalStyles'
import { IconContext } from 'react-icons/lib' 

import { 
  Nav, 
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks, 
  NavItemBtn,
  NavBtnLink, 
 }  from './Navbar.elements'

const Navbar = () => {
const [click, setClick] = useState(false)
const [button, setButton] = useState(true)

const handleClick = () => setClick(!click)
const closeMobileMenu = () => setClick(false)

const showButton = () => {
  if(window.innerWidth <= 960) {
    setButton(false)
  }else {
    setButton(true)
  }
}
useEffect(() => {
  showButton()
}, [])
window.addEventListener('resize', showButton)
    return (
     <>
     <IconContext.Provider value={{ color: '#fff'}}> 
   <Nav>
   <NavbarContainer>
    <NavLogo to='/'>
    <NavIcon />
    OULIX
    </NavLogo>
    <MobileIcon onClick={handleClick}>
     {click ? <FaTimes /> : <GoThreeBars />}
    </MobileIcon>
     <NavMenu onClick={handleClick}  click={click}>
     <NavItem><NavLinks to='home'>
       Home</NavLinks>
    </NavItem>

    <NavItem>
    <NavLinks to='/services'>Services</NavLinks>  
    </NavItem>

    <NavItem>
    <NavLinks to='/products'>Products</NavLinks>
    </NavItem>
      <NavItemBtn>
       {button ? (
         <NavBtnLink to="/sing-up">
         <Button primary>SING UP</Button>
         </NavBtnLink>
       ) : (
         <NavBtnLink to="/sing-up">
          <Button onClick={closeMobileMenu} fontBig primary>
            SING UP
          </Button>
         </NavBtnLink>
       )}
      </NavItemBtn>
     </NavMenu>
   </NavbarContainer>
   </Nav>
   </IconContext.Provider>
     </>
    )
}

export default Navbar

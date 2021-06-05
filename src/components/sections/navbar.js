import React, {useState} from 'react'
import {GoThreeBars} from 'react-icons/go'
import {FaTimes} from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks }  from './Navbar.elements'
import { Container } from '../../globalStyles'
import { IconContext } from 'react-icons/lib' 

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)

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
    <NavMenu onClick={handleClick} >
     <NavItem>
       <NavLinks to='/'>Home</NavLinks>
    
     </NavItem>
    </NavMenu>
   </NavbarContainer>
   </Nav>
   </IconContext.Provider>
     </>
    )
}

export default Navbar

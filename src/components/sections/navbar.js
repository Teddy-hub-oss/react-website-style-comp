import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon } from './Navbar.elements'
import { Container } from '../../globalStyles'


const Navbar = () => {
    return (
     <>
   <Nav>
   <NavbarContainer>
    <NavLogo to='/'>
    <NavIcon />
    OULIX
    </NavLogo>
   </NavbarContainer>
   </Nav>
     </>
    )
}

export default Navbar

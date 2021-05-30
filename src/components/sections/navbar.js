import React, {useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } 
import Navbar from './Navbar.elements'
import { Container } from '../../globalStyles'


const Navbar = () => {
const [click, setClick] = useState(false)

const HandleClick = () => setClick(!click)

    return (
     <>
   <Nav>
   <NavbarContainer>
    <NavLogo to='/'>
    <NavIcon />
    OULIX
    </NavLogo>
    <MobileIcon onClick={HandleClick}>
     {click ? <FaTimes /> : <FaBars />}
    </MobileIcon>
   </NavbarContainer>
   </Nav>
     </>
    )
}

export default Navbar

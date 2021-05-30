import styled from 'styled-components'
// import { FaMagento } from 'react-icons/fa'
import {FiLink2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
background: #101522;
height:80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: static;
top: 0;
z-index: 999;
`

export const NavbarContainer = styled(Container)`
 display: flex;
 justify-content: space-around;
 height: 80px;

 ${Container}
`
export const NavLogo = styled(Link) `
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 text-decoration: none;
 font-size: 2rem;
 display: flex;
 align-items: center;
`

export const NavIcon = styled(FiLink2) `
 margin-right: 0.5rem;
`

export const MobileIcon = styled.div `
 display: none;

 @media screen and (max-width: 960px) {
     display: block;
     position: apsolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.Brem;
     cursor: pointer;
 }

`
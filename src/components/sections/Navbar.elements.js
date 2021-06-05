import styled from 'styled-components'
// import { FaMagento } from 'react-icons/fa'
import {MdFlipToBack } from 'react-icons/md'
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
 justify-content: space-between;
 align-items: center;

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

export const NavIcon = styled(MdFlipToBack) `
 margin-right: 0.5rem;

`

export const MobileIcon = styled.div `
   /* display: none; */
   font-size: 2.2rem;
 @media screen and (max-width: 960px) {
     display: block;
     position: apsolute;
     top: 0;
     right: 0;
     /* transform: translate(-100%, 60%); */
     font-size: 2.8rem;
     cursor: pointer;
 }
`




import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
const Footer = () => {
    return (
        <footer>
        <a
        href="http://www.linkedin.com/in/teddyalemayehu"
        target="_blank"
        >
        <img src="images/linkedin_logo.png" />
        </a>

        <a href="https://github.com/Teddy-hub-oss/react-pro.git"
        target="_blank"
        >
        <img src="images/github_logo.png" 
        alt="person picture"/>
        </a>
        </footer>
    
    )
}
export default Footer
import React from 'react';

//icons
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
        <p>Desenvolvido por @mendjoy</p>
        <div className="socialLinks">
            <p><a href='https://www.linkedin.com/in/mendjoy/' target="_blank"><FaLinkedin /></a></p>
            <p><a href='https://www.instagram.com/mendjoy/' target="_blank"><PiInstagramLogoFill /></a></p>
            <p><a href='https://github.com/mendjoy' target="_blank"><FaGithub /></a></p>
        </div>
    </footer>
  )
}

export default Footer

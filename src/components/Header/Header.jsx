import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='main-header-section'>
      <div className="header-container">
        <div className="logo">
          <Link to={'/'} className='h3'><span className='edit'>R</span>aunak</Link>
        </div>

        {/* Menu Icon - Moved to Right */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <Link to={'/'} className='links-l'>Home</Link>
          <Link
            to="#"
            className="links-l"
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            About
          </Link>
          <Link to={'/'} className='links-l'  onClick={() => document.getElementById('Achievements').scrollIntoView({ behavior: 'smooth' })}>Achievements</Link>
          <Link to={'/contact-us'} className='links-l'>Contact</Link>
        </div>

        {/* Contact Button (Hidden in Mobile) */}
        <div className="contact">
          <Link to={'/contact-us'} className='click-contact-btn'>Let's Talk <FaArrowRight className='arrow' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header;

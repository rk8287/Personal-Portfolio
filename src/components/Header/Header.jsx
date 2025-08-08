import React, { useState } from 'react';
import './header.css';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className='main-header-section'>
      <div className="header-container">
        <div className="logo">
          <Link to='/' className='h3'><span className='edit'>R</span>aunak</Link>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <Link to='/' className={`links-l ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <a
            href="#about"
            className="links-l"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </a>
          <a
            href="#Achievements"
            className="links-l"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('Achievements')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Achievements
          </a>
          <Link to='/training_certificates' className={`links-l ${isActive('/training_certificates') ? 'active' : ''}`}>Training/Certificates</Link>
        </div>

        <div className="contact">
          <Link to='/contact-us' className='click-contact-btn'>Let's Talk <FaArrowRight className='arrow' /></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

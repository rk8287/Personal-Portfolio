import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='main-header-section'>

        <div className="header-container">
            <div className="logo">
                <Link to={'/'} className='h3'><span className='edit'>R</span>aunak</Link>
            </div>
            <div className="links">
                <Link to={'/'} className='links-l'>Hello</Link>
                <Link to={'/about'} className='links-l'>About</Link>
                <Link to={'/'} className='links-l'>Achivements</Link>
                <Link to={'/contact-us'} className='links-l'>Contact</Link>
            </div>
            <div className="contact">
                <Link to={'/contact-us'} className='click-contact-btn'>Let's Talk <FaArrowRight className='arrow'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Header
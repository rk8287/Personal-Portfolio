import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className='main-footer-container'>
      <div className="main-footer-section">
        <div className="footer-name">
          <div className='logo-name'>
            <span style={{color:'#e6fc56',fontWeight:'900',fontFamily:'cursive'}}>R</span>aunak
          </div>
        </div>

        <div className="footer-other-content">

          <div className="footer-semi">
            <div className="semi-head">Contact</div>
            <div className="footer-det">
              <Link className='footer-mail'>rounak8287@gmail.com</Link>
              <Link className='footer-mail'>Let's work together</Link>
            </div>
          </div>

          <div className="footer-semi">
            <div className="semi-head">India</div>
            <div className="footer-det">
              <Link className='footer-mail'>Gurugram</Link>
              <div className='footer-mail'>Haryana</div>
            </div>
          </div>

          <div className="footer-semi">
            <div className="semi-head">Explore</div>
            <div className="footer-det">
              <Link to={'/'} className='footer-mail'>Portfolio</Link>
              <Link to={'https://www.linkedin.com/in/raunak-singh%F0%9F%9A%80-6752a9244/'} className='footer-mail'>LinkedIn</Link>
              <Link to={'/contact-us'} className='footer-mail'>Contact</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;

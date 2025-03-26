import React from 'react'
import Home from '../Home/Home'
import Experience from '../../pages/Experience/Experience'
import Process from '../../pages/Process/Process'
import Porfolio from '../../pages/Portfolio/Porfolio'
import Resume from '../../pages/Resume/Resume'
import Service from '../../pages/Service/Service'
import Hire from '../../pages/Hire/Hire'
import Footer from '../../pages/Footer/Footer'
import './main.css';

const Main = () => {
  return (
    <div className='main-container-s'>

       <div className="home-box">
       <Home/>
       </div>

       <div className="experience" id='about'>
          <Experience/>
       </div>

       <div className="process">
          <Process/>
       </div>

       
       <div className="portfolio">
          <Porfolio/>
       </div>

       
       <div className="resume" id='Achievements'>
          <Resume/>
       </div>

         
       <div className="service">
          <Service/>
       </div>

       <div className="hire">
          <Hire/>
       </div>

       
       <div className="footer">
          <Footer/>
       </div>

    </div>
  )
}

export default Main
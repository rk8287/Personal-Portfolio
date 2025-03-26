import React from 'react'
import './home.css'

import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import { fadeIn, fadeInS } from '../variants/variants'

const Home = () => {
  return (
    <div className='home-main-container'>

      <motion.div variants={fadeInS("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="home-main-section">

        <div className="left">
          <div className="name-tag">
            <div className="names">HI, I'M RAUNAK</div>
          </div>

          <div className="bold-text">
            <h4>Creating Websites Igniting Creativity</h4>
          </div>


          <div className="desc">
            <p>As a Full Stack Developer, I specialize in building dynamic and responsive web
              applications using the MERN stack. From crafting seamless user interfaces with React to
              developing robust backends with Node.js and MongoDB, I ensure high-performance and scalable solutions. Explore my portfolio to
              see my expertise in action, and let's collaborate to bring your ideas to life.</p>
          </div>

          <div className="buttons">
            <button
              style={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => window.open('/contact-us')}
            >
              Let's Talk! <IoIosArrowForward className='arrow' />
            </button>

            <button
              onClick={() => window.open('/Raunak.pdf', '_blank')}
            >
              Download Resume
            </button>
          </div>

        </div>
        <div className="right">

        </div>
      </motion.div>

    </div>
  )
}

export default Home
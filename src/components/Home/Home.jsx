import React from 'react'
import './home.css'

import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';
import {fadeIn, fadeInS} from '../variants/variants'

const Home = () => {
  return (
    <div className='home-main-container'>

        <motion.div variants={fadeInS("up",0.3)}
        initial="hidden"
        whileInView ={"show"}
        viewport={{once: false,amount: 0.7}}
        className="home-main-section">

          <div className="left">
            <div className="name-tag">
              <div className="names">HI, I'M RAUNAK</div>
            </div>

            <div className="bold-text">
              <h4>Creating Websites Igniting Creativity</h4>
            </div>


            <div className="desc">
              <p>As a full stack developer, I excel in tailoring WordPress templates to craft visually
                 captivating and user-friendly websites. Delve into my portfolio to witness my expertise,
                 and let's collaborate to transform your concepts into reality..</p>
            </div>

            <div className="buttons">
              <button style={{backgroundColor:'black',color:'white' }}>Let's Talk! <IoIosArrowForward className='arrow'/></button>
              <button>My Portfolio</button>
            </div>
          </div>
          <div className="right">
           
          </div>
        </motion.div>

    </div>
  )
}

export default Home
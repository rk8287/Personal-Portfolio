import React from 'react';
import './hire.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants/variants';
import { Link } from 'react-router-dom';
const bg = require('../../assets/bg_3-1.png')


const Hire = () => {
  return (
    <div className='main-hire-container'>
        <motion.div variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView ={"show"}
        viewport={{once: false,amount: 0.25}} className="main-hire-section">
        <div className="bg-2"><img src={bg} alt="" /></div>

            <div className="hire-header">SAY HELLO</div>
            <div className="hire-co-header">Have a Project in Mind?​</div>

            <div className="hire-btns">
                <Link className='button' to={'https://www.linkedin.com/in/raunak-singh%F0%9F%9A%80-6752a9244/'} style={{backgroundColor:'black',color:'white'}}>Hire Me</Link>
                <button className='button'>Get a Quote</button>
            </div>

            <div className="bg"><img src={bg} alt="" /></div>
        </motion.div>
    </div>
  )
}

export default Hire
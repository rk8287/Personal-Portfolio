import React from 'react'
import './process.css'
import { fadeIn } from '../../components/variants/variants'
import { motion } from 'framer-motion'


const Process = () => {
  return (
    <div className='process-main-section'>

        <motion.div variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView ={"show"}
        viewport={{once: false,amount: 0.7}} className="process-main-container">
            <h3>THE DEVELOPMENT PROCESS</h3>
           
            <div className="process-desc">
                <strong>Ideas to Reality</strong>
                <div className='circless'></div>
                <div className='circle'></div>
               
            </div>

            <div className="concept-wrapper">
                <div className="concept">
                  <h3>Concept</h3>
                  
                   <p>Brainstorming and ideation to develop an understanding of your
                     project goals and objectives.</p>
                </div> <hr />

                <div className="concept">
                  <h3>Design</h3>
                   <p>I foster brainstorming and ideation sessions to grasp your project's
                     goals and objectives, facilitating the design process.</p>
                </div> <hr />


                <div className="concept">
                  <h3>Testing</h3>
                   <p>I orchestrate brainstorming and ideation sessions to grasp your project's goals
                     and objectives comprehensively, ensuring robust testing methodologies.</p>
                </div> <hr />

                <div className="concept">
                  <h3>Result</h3>
                   <p>I lead brainstorming and ideation sessions to grasp your project's
                     goals and objectives, culminating in tangible results.</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Process
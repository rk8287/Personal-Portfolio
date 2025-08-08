import React from 'react'
import './process.css'
import { fadeIn } from '../../components/variants/variants'
import { motion } from 'framer-motion'

const Process = () => {
  return (
    <div className='process-main-section'>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="process-main-container"
      >
        <h3>THE DEVELOPMENT PROCESS</h3>

        <div className="process-desc">
          <strong>Ideas to Reality</strong>
          <div className='circless'></div>
          <div className='circle'></div>
        </div>

        <div className="concept-wrapper">
          {[
            {
              title: "Concept",
              desc: "Brainstorming and ideation to develop an understanding of your project goals and objectives."
            },
            {
              title: "Design",
              desc: "I foster brainstorming and ideation sessions to grasp your project's goals and objectives, facilitating the design process."
            },
            {
              title: "Testing",
              desc: "I orchestrate brainstorming and ideation sessions to grasp your project's goals and objectives comprehensively, ensuring robust testing methodologies."
            },
            {
              title: "Result",
              desc: "I lead brainstorming and ideation sessions to grasp your project's goals and objectives, culminating in tangible results."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.2 + 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="concept"
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {index < 3 && <hr />}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Process

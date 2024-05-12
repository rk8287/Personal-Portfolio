import React from 'react'
import './resume.css'
import { fadeInS } from '../../components/variants/variants'
import { motion } from 'framer-motion'



const Resume = () => {
  return (
    <div className='resume-main-container'>

      <div className="resume-main-section">
        <div className="resume-header">
          <div>MY RESUME</div>
        </div>

        <div className="resume-second-head">
          <motion.div variants={fadeInS("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}>Summary of Experience</motion.div>
        </div>

        <div className="resume-wrapper">

          <div className="resume-left">
            <div className="left-head">Work Experience</div>

            <div className="main-resume-details-container">
              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className='full'>Full Stack Developer</motion.div>


              <div className="duration-container">
                <motion.div variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }} >2024 - PRESENT SLASH MARK</motion.div>
              </div>

              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="resume-description">
                <p>Architect robust web applications, leveraging the MERN stack to engineer dynamic user interfaces, optimize server-side functionality,
                   orchestrate seamless data flow, and deliver scalable solutions with precision and efficiency.</p>
              </motion.div>

            </div>

            {/* second */}

            <div className="main-resume-details-container">
              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className='full'>Web Developer (Intern)</motion.div>


              <div className="duration-container">
                <motion.div variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>2023 -SOLAR-SECURE-SOLUTION</motion.div>
              </div>

              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="resume-description">
                <p>Catalyzed teamwork, efficiency, and propelled our collective success through strategic 
                  task coordination, proactive communication, 
                  and harnessing individual strengths to synergize towards our common objectives.</p>
              </motion.div>

            </div>

            {/* third */}


            <div className="main-resume-details-container">
              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className='full'>Hostess</motion.div>


              <div className="duration-container">
                <motion.div variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>2017 - 2019 FAMILY MEAL</motion.div>
              </div>

              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="resume-description">
                <p>Warmly welcomed guests, managed reservations, and ensured a smooth flow of service,
                  creating a delightful and organized atmosphere in the hospitality realm.</p>
              </motion.div>

            </div>

          </div>
          <div className="resume-right">
            <motion.div variants={fadeInS("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} className="right-head">Education</motion.div>

            <div className="main-resume-details-container">
              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className='full'>Graduation (Bachelor's of Computer Application)</motion.div>


              <div className="duration-container">
                <motion.div variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>2022 - AMRITA UNIVERSITY</motion.div>
              </div>

              <div className="resume-description">
                <motion.p variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>Attained proficiency in crafting immersive 
                  digital experiences, conceptualizing wireframes, prototypes, and adeptly employing industry-standard tools
                   to elevate project outcomes during my tenure at Amrita University pursuing BCA.</motion.p>
              </div>

            </div>

            {/* second */}

            <div className="main-resume-details-container">
              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className='full'>Full Stack Development - Online</motion.div>


              <div className="duration-container">
                <motion.div variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>2022 - 2023 CODING NINJAS</motion.div>
              </div>

              <div className="resume-description">
                <motion.p variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>Honed full stack development expertise through 
                  immersive training at Coding Ninjas, where I delved into intricate coding concepts,
                   refined problem-solving skills, and cultivated a deep understanding of software 
                   architecture. Additionally, I honed my design finesse, leveraging components for
                    streamlined layouts, crafting dynamic icons, utilizing layer masks for precision,
                   and mastering image manipulation techniques to create visually captivating designs.</motion.p>
              </div>

            </div>


          </div>

        </div>

        <div className="resume-skill-section">
          <div className="skill-wrapper">

            <div className="left-skill">
              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="skill-header">Skills</motion.div>

              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="skill-second-header">Design & Development</motion.div>

              <div className="skill-content">
                <motion.ul variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>
                  <li>ReactJs</li>
                  <li>MongoDb</li>
                  <li>ExpressJs</li>
                  <li>NodeJs</li>
                  <li>Sass</li>
                  <li>Java</li>
                  
                </motion.ul>
              </div>
            </div>
            <div className="right-skill">
              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="skill-header">Tools</motion.div>

              <div className="skill-second-header">Programs & Tools</div>

              <div className="skill-content">
                <motion.ul variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>
                  <li>Vs Code</li>
                  <li>Git</li>
                  <li>React Framer Motion</li>
                  <li>Spline / Blender</li>
                </motion.ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resume
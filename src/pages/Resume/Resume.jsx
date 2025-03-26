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
                  viewport={{ once: false, amount: 0.7 }} >Jan 2024 - Mar 2024 SLASH MARK</motion.div>
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
                viewport={{ once: false, amount: 0.7 }} className='full'>
                Full Stack Developer - Planet Fares
              </motion.div>

              <div className="duration-container">
                <motion.div variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>
                  2024 - Present | Personal Project
                </motion.div>
              </div>

              <motion.div variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }} className="resume-description">
                <p>Designed and developed <strong>Planet Fares</strong>, a flight booking platform using
                  <strong> MERN stack</strong>. Integrated APIs for real-time flight search, built a
                  responsive UI with <strong>React & Tailwind CSS</strong>, and implemented secure authentication.
                  Enhanced user experience by adding pagination, search filters, and custom hooks for optimized API calls.</p>
              </motion.div>
            </div>

            {/* third */}




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
                  viewport={{ once: false, amount: 0.7 }}>2022 - 2025 Amrita Vishwa Vidyapeetham University</motion.div>
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
                  viewport={{ once: false, amount: 0.7 }}>2025 -Present | Internshala</motion.div>
              </div>

              <div className="resume-description">
                <motion.p variants={fadeInS("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}>Gained expertise in full stack development through immersive training at Internshala, mastering both front-end and back-end technologies. Developed a deep understanding of software architecture, problem-solving, and efficient coding practices.

                  Enhanced UI/UX design skills by leveraging components for streamlined layouts, creating dynamic icons, utilizing layer masks for precision, and implementing image manipulation techniques to craft visually engaging and user-friendly interfaces.</motion.p>
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
                  <li>NextJs</li>
                  <li>TypeScript</li>
                  <li>MongoDb</li>
                  <li>ExpressJs</li>
                  <li>NodeJs</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Sass</li>
                  <li>Firebase</li>
                  <li>REST API</li>
                  <li>GraphQL</li>
                  <li>Redux Toolkit</li>
                  <li>MySQL</li>
                  <li>Java</li>
                  <li>Git & GitHub</li>
                  <li>Framer Motion</li>
                  <li>Figma</li>
                  <li>Postman</li>
                  <li>Vercel & Render</li>
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
                  <li>VS Code</li>
                  <li>Git & GitHub</li>
                  <li>React Framer Motion</li>
                  <li>Figma</li>
                  <li>Postman</li>
                  <li>Vercel & Render</li>

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
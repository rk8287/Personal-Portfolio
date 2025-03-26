import React, { useEffect, useState } from 'react';
import './experience.css';
import { fadeIn, fadeInS } from '../../components/variants/variants';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cir = require('../../assets/profile-pic.jpg')

const Experience = () => {
  const [yearsOfExp, setYearsOfExp] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [happyClients, setHappyClients] = useState(0);


  const { ref, inView } = useInView({ triggerOnce: false });

  const incrementNumbers = () => {
    const timer = setInterval(() => {
     
      setYearsOfExp(prevState => (prevState < 2 ? prevState + 1 : prevState));
     
      setCompletedProjects(prevState => (prevState < 10 ? prevState + 1 : prevState));
      setHappyClients(prevState => (prevState < 10 ? prevState + 1 : prevState));
    }, 200); 
    return () => clearInterval(timer); 
  };



  useEffect(() => {
    if (inView) {
      incrementNumbers();
    }
  }, [inView]);



  return (
    <>

      <div className='experience-main-section'>
        <div className="experience-main-container">
          <motion.div variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            ref={ref}
            viewport={{ once: false, amount: 0.7 }} className="experience-left">

            <div className="experience-image">

              <img src={cir} alt="Experience" />
            </div>
          </motion.div>
          <div className="experience-right">
            <div className="experience-right-head">
              <h4><span style={{ color: '#e6fc56', fontWeight: '700', fontFamily: 'cursive', fontSize: '2rem' }}>A</span>BOUT ME</h4>
            </div>

            <motion.div variants={fadeInS("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              ref={ref}
              viewport={{ once: false, amount: 0.7 }} className="some-detials">
              <h3>Stunning Website with Refreshing Ideas</h3>
            </motion.div>

            <div className="some">
              <motion.h5 variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                ref={ref}
                viewport={{ once: false, amount: 0.7 }}>“Hi there, I’m Raunak!”</motion.h5>
            </div>

            <div className="description">
              <motion.p variants={fadeInS("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                ref={ref}
                viewport={{ once: false, amount: 0.7 }}>With a creative flair and a dedication to building visually exciting digital
                experiences, I strive to bring your unique vision to life.</motion.p>
            </div>

            <div className="exp-container">
            <div className="ex">
  <motion.p 
    variants={fadeInS("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    ref={ref}
    viewport={{ once: false, amount: 0.7 }}
  >
    EXPERIENCE
  </motion.p>
  <strong>Extensive Hands-on Experience</strong>
  <p>Worked on multiple real-world projects, including internships and freelance work, building scalable full-stack applications.</p>
</div>

<div className="sk">
  <motion.p 
    variants={fadeInS("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    ref={ref}
    viewport={{ once: false, amount: 0.7 }}
  >
    SKILLS
  </motion.p>
  
  <motion.strong 
    variants={fadeInS("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    ref={ref}
    viewport={{ once: false, amount: 0.7 }}
  >
    Full Stack Developer | MERN Stack | DSA with Java
  </motion.strong>

  <p>Proficient in React.js, Node.js, Express.js, and MongoDB for building scalable web applications. Experienced in UI/UX design, API integrations, and optimizing performance. Strong problem-solving skills with Data Structures & Algorithms using Java.</p>
</div>

            </div>

          </div>


        </div>
      </div>


    </>

  );
}

export default Experience;

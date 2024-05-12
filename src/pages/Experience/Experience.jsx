import React, { useEffect, useState } from 'react';
import './experience.css';
import { fadeIn } from '../../components/variants/variants';
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
      // Increment yearsOfExp every 300 milliseconds
      setYearsOfExp(prevState => (prevState < 2 ? prevState + 1 : prevState));
      // Increment completedProjects and happyClients every 100 milliseconds
      setCompletedProjects(prevState => (prevState < 10 ? prevState + 1 : prevState));
      setHappyClients(prevState => (prevState < 10 ? prevState + 1 : prevState));
    }, 200); // Keep this interval for completedProjects and happyClients
    return () => clearInterval(timer); // Stop the timer when the component unmounts
  };
  
  

useEffect(() => {
  if (inView) {
    incrementNumbers();
  }
}, [inView]);



  return (
  <>
  
  <div className='experience-main-section'>
      <motion.div variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView ={"show"}
        ref={ref}
        viewport={{once: false,amount: 0.7}} className="experience-main-container">
        <div className="experience-left">
        
          <div className="experience-image">
            
            <img src={cir} alt="Experience" />
          </div>
        </div>
        <div className="experience-right">
          <div className="experience-right-head">
            <h4><span style={{color:'#e6fc56',fontWeight:'700',fontFamily:'cursive',fontSize:'2rem'}}>A</span>BOUT ME</h4>
          </div>

          <div className="some-detials">
            <h3>Stunning Website with Refreshing Ideas</h3>
          </div>

            <div className="some">
                <h5>“Hi there, I’m Raunak!”</h5>
            </div>

            <div className="description">
                <p>With a creative flair and a dedication to building visually exciting digital
                     experiences, I strive to bring your unique vision to life.</p>
            </div>

            <div className="exp-container">
                <div className="ex">
                     <p>EXPERIENCE</p>
                    <strong>2+ Years</strong>
                </div>
                <div className="sk">
                   <p>SKILLS</p>
                    <strong>Full Stack Developer</strong>
                </div>
            </div>
          
        </div>

       
      </motion.div>
    </div>


    <div className="total-exper">
        <div className="first-div">
          <h3>{yearsOfExp}+</h3>
          <h5>Years of Experience</h5>
        </div>
        <div className="second-div">
          <h3>{completedProjects}+</h3>
          <h5>Completed Projects</h5>
        </div>
        <div className="third-div">
          <h3>{happyClients}+</h3>
          <h5>Happy Clients</h5>
        </div>
      </div>
  </>
  
  );
}

export default Experience;

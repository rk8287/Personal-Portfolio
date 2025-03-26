import React from 'react'
import './portfolio.css'
import { motion } from 'framer-motion'
import { fadeInS } from '../../components/variants/variants';
import { useInView } from 'react-intersection-observer';


const project = require('../../assets/projectOne.png')
const coursePurchsing = require('../../assets/projectTwo.png')
const ecommerce = require('../../assets/projectThree (1).png')


const Porfolio = () => {

    const { ref, inView } = useInView({ triggerOnce: false });

    return (
        <div className='main-portfolio-container'>

            <div className="main-porfolio-section">
                <div className="portfolio-header">
                    <h3>PORTFOLIO</h3>
                </div>

                <div className="portfolio-second-header">
                    <motion.h2 variants={fadeInS("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        ref={ref}
                        viewport={{ once: false, amount: 0.7 }} >Discover my Portfolio</motion.h2>
                </div>

                <div className="porfolio-wrapper">

                    <div className="portfolio-left">
                        <div className="wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >FULL STACK</motion.p>
                        </div>

                        <div className="second-wordpress">
                            <motion.div variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Course Purchasing Platform</motion.div>
                        </div>

                        <div className="third-wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >The Course Purchasing Platform is a web-based 
                                application designed to provide users with a seamless experience in browsing, selecting,
                                 and purchasing online courses. Built with a user-friendly interface,
                                 it ensures easy navigation and secure transactions for learners.

                            </motion.p>
                        </div>

                        <div className="fourth-btn">
                            <motion.button variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Explore Website</motion.button>
                        </div>
                    </div>
                    <div className="portfolio-right">
                        <img className='project-image' src={coursePurchsing} alt="" />
                    </div>
                </div>


                {/* second box */}


                <div className="porfolio-wrapper-second">


                    <div className="portfolio-right">
                        <img className='project-image' src={ecommerce} alt="" />
                    </div>


                    <div className="portfolio-left">
                        <div className="wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >FULL STACK</motion.p>
                        </div>

                        <div className="second-wordpress">
                            <motion.div variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >E-Commerce Website</motion.div>
                        </div>

                        <div className="third-wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >The E-Commerce Website is a dynamic 
                                and fully functional online shopping platform designed to provide users with
                                 a seamless shopping experience. It features a modern UI/UX, secure transactions, 
                                 and efficient product management,
                                 making it ideal for businesses looking to sell their products online.

                            </motion.p>
                        </div>

                        <div className="fourth-btn">
                            <motion.button variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Explore Website</motion.button>
                        </div>
                    </div>
                </div>

                {/* Third box */}

                <div className="porfolio-wrapper">

                    <div className="portfolio-left">
                        <div className="wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >FULL STACK</motion.p>
                        </div>

                        <div className="second-wordpress">
                            <motion.div variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Flight Ticket Booking Platform</motion.div>
                        </div>

                        <div className="third-wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >The Flight Ticket Booking Platform is a
                                 user-friendly web application designed to help travelers search and book flights
                                  seamlessly. With an intuitive interface and real-time 
                                flight data, users can easily find the best travel options based on their preferences.

                            </motion.p>
                        </div>

                        <div className="fourth-btn">
                            <motion.button variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Explore Website</motion.button>
                        </div>
                    </div>
                    <div className="portfolio-right">
                        <img className='project-image' src={project} alt="" />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Porfolio
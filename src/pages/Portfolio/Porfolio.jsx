import React from 'react'
import './portfolio.css'
import { motion } from 'framer-motion'
import { fadeInS } from '../../components/variants/variants';
import { useInView } from 'react-intersection-observer';


const project = require('../../assets/RER-mockup1-1024x768.png')

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
                                viewport={{ once: false, amount: 0.7 }} >Rivers Edge Ranch</motion.div>
                        </div>

                        <div className="third-wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >A WordPress Website for a Mushroom Farm in Bayfield, Colorado. Explore
                                how this website showcases the beauty and bounty of a picturesque
                                mushroom farm in Bayfield, Colorado.

                            </motion.p>
                        </div>

                        <div className="fourth-btn">
                            <motion.button variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Explore Case Study</motion.button>
                        </div>
                    </div>
                    <div className="portfolio-right">
                        <img className='project-image' src={project} alt="" />
                    </div>
                </div>


                {/* second box */}


                <div className="porfolio-wrapper-second">


                    <div className="portfolio-right">
                        <img className='project-image' src={project} alt="" />
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
                                viewport={{ once: false, amount: 0.7 }} >Rivers Edge Ranch</motion.div>
                        </div>

                        <div className="third-wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >A WordPress Website for a Mushroom Farm in Bayfield, Colorado. Explore
                                how this website showcases the beauty and bounty of a picturesque
                                mushroom farm in Bayfield, Colorado.

                            </motion.p>
                        </div>

                        <div className="fourth-btn">
                            <motion.button variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Explore Case Study</motion.button>
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
                                viewport={{ once: false, amount: 0.7 }} >Rivers Edge Ranch</motion.div>
                        </div>

                        <div className="third-wordpress">
                            <motion.p variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >A WordPress Website for a Mushroom Farm in Bayfield, Colorado. Explore
                                how this website showcases the beauty and bounty of a picturesque
                                mushroom farm in Bayfield, Colorado.

                            </motion.p>
                        </div>

                        <div className="fourth-btn">
                            <motion.button variants={fadeInS("up", 0.2)}
                                initial="hidden"
                                whileInView={"show"}
                                ref={ref}
                                viewport={{ once: false, amount: 0.7 }} >Coming Soon</motion.button>
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
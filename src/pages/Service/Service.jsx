import React from 'react';
import './service.css';

import { IoDesktopOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { GrOptimize } from "react-icons/gr";
import { FaRocket } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeInS } from '../../components/variants/variants';


const Service = () => {
    return (
        <div className='service-main-container'>
            <div className="service-main-section">
                <motion.div variants={fadeInS("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }} className="service-header">SERVICES</motion.div>

                <div className="service-co-header">My Service Catalog</div>

                <div className="service-wrapper">

                    <motion.div variants={fadeInS("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className="service-box">
                        <div className="service-logo"><IoDesktopOutline /></div>
                        <div className="service-text">Website Design</div>
                        <div className="service-description">Dynamic, user-friendly, responsive websites tailored to your brand</div>
                    </motion.div>

                    <motion.div variants={fadeInS("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className="service-box">
                        <div className="service-logo"><IoSettings /></div>
                        <div className="service-text">Maintenance</div>
                        <div className="service-description">Smooth operation and continuous improvement of your online presence</div>
                    </motion.div>

                    <motion.div variants={fadeInS("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className="service-box">
                        <div className="service-logo"><GrOptimize /></div>
                        <div className="service-text">Features</div>
                        <div className="service-description">As a full-stack developer, I deliver dynamic, user-friendly, and responsive websites customized to reflect your brand's essence.</div>

                    </motion.div>
                </div>

                {/* Second-wrapper */}

                <div className="service-wrapper">

                    <motion.div variants={fadeInS("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className="service-box">
                        <div className="service-logo"><FaReact /></div>
                        <div className="service-text">MERN STACK Website</div>
                        <div className="service-description">Crafting dynamic, user-friendly, and responsive websites tailored precisely to encapsulate your brand identity.</div>

                    </motion.div>

                    <motion.div variants={fadeInS("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className="service-box">
                        <div className="service-logo"><FaBook /></div>
                        <div className="service-text">Latest Technologies</div>
                        <div className="service-description">Utilizing the latest MERN (MongoDB, Express.js, React, Node.js)
                         technologies to craft dynamic, user-friendly, and responsive websites perfectly aligned with your brand identity.</div>
                    </motion.div>


                    <motion.div variants={fadeInS("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }} className="service-box">
                        <div className="service-logo"><FaRocket /></div>
                        <div className="service-text">SEO & Speed</div>
                        <div className="service-description">Implementing strategic search engine optimization techniques to
                         boost visibility and optimize website speed.</div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Service
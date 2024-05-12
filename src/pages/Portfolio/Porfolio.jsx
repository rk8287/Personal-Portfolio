import React from 'react'
import './portfolio.css'
const project = require('../../assets/RER-mockup1-1024x768.png')

const Porfolio = () => {
    return (
        <div className='main-portfolio-container'>

            <div className="main-porfolio-section">
                <div className="portfolio-header">
                    <h3>PORTFOLIO</h3>
                </div>

                <div className="portfolio-second-header">
                    <h2>Discover my Portfolio</h2>
                </div>

                <div className="porfolio-wrapper">

                    <div className="portfolio-left">
                        <div className="wordpress">
                            <p>FULL STACK</p>
                        </div>

                        <div className="second-wordpress">
                            <div>Rivers Edge Ranch</div>
                        </div>

                        <div className="third-wordpress">
                            <p>A WordPress Website for a Mushroom Farm in Bayfield, Colorado. Explore
                                how this website showcases the beauty and bounty of a picturesque
                                mushroom farm in Bayfield, Colorado.

                            </p>
                        </div>

                        <div className="fourth-btn">
                            <button>Explore Case Study</button>
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
                            <p>FULL STACK</p>
                        </div>

                        <div className="second-wordpress">
                            <div>Rivers Edge Ranch</div>
                        </div>

                        <div className="third-wordpress">
                            <p>A WordPress Website for a Mushroom Farm in Bayfield, Colorado. Explore
                                how this website showcases the beauty and bounty of a picturesque
                                mushroom farm in Bayfield, Colorado.

                            </p>
                        </div>

                        <div className="fourth-btn">
                            <button>Explore Case Study</button>
                        </div>
                    </div>
                </div>

                {/* Third box */}

                <div className="porfolio-wrapper">

                    <div className="portfolio-left">
                        <div className="wordpress">
                            <p>FULL STACK</p>
                        </div>

                        <div className="second-wordpress">
                            <div>Rivers Edge Ranch</div>
                        </div>

                        <div className="third-wordpress">
                            <p>A WordPress Website for a Mushroom Farm in Bayfield, Colorado. Explore
                                how this website showcases the beauty and bounty of a picturesque
                                mushroom farm in Bayfield, Colorado.

                            </p>
                        </div>

                        <div className="fourth-btn">
                            <button>Coming Soon</button>
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